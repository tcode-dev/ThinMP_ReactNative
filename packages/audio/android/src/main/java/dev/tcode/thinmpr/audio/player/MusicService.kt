package dev.tcode.thinmpr.audio.player

import android.annotation.SuppressLint
import android.app.Notification
import android.app.Service
import android.content.Intent
import android.content.IntentFilter
import android.graphics.Bitmap
import android.graphics.ImageDecoder
import android.os.Binder
import android.os.Handler
import android.os.IBinder
import android.os.Looper
import androidx.media3.common.MediaItem
import androidx.media3.common.PlaybackException
import androidx.media3.common.Player
import androidx.media3.common.Tracks
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.session.MediaSession
import androidx.media3.session.MediaStyleNotificationHelper
import dev.tcode.thinmpr.audio.constant.NotificationConstant
import dev.tcode.thinmpr.audio.model.contract.SongModelContract
import dev.tcode.thinmpr.audio.notification.LocalNotificationHelper
import dev.tcode.thinmpr.audio.constant.ShuffleMode
import dev.tcode.thinmpr.audio.constant.RepeatMode
import dev.tcode.thinmpr.audio.receiver.HeadsetEventReceiver
import java.io.IOException

class MusicService : Service() {
    private val PREV_MS = 3000
    private val binder = MusicBinder()
    private lateinit var player: ExoPlayer
    private lateinit var mediaSession: MediaSession

    @SuppressLint("UnsafeOptInUsageError")
    private lateinit var mediaStyle: MediaStyleNotificationHelper.MediaStyle
    private lateinit var headsetEventReceiver: HeadsetEventReceiver
    private lateinit var playerEventListener: PlayerEventListener
    private lateinit var sendPlaybackSongChange: (song: SongModelContract) -> Unit
    private lateinit var sendIsPlayingChange: (isPlaying: Boolean) -> Unit
    private lateinit var repeatMode: RepeatMode
    private lateinit var shuffleMode: ShuffleMode
    private var playingList: List<SongModelContract> = emptyList()
    private var initialized: Boolean = false
    private var isPlaying = false
    private var isStarting = false

    // Serviceの起動状態を確認する必要がある
    // Android13以降を対象にしているのでgetRunningServicesやLocalBroadcastManagerは使用できない
    // そのためcompanion objectでServiceの起動状態を管理する
    // アプリを再起動してもisServiceRunningは前回起動時の値のままなのでonDestroyで初期化する
    companion object {
        var isServiceRunning = false
    }

    override fun onCreate() {
        super.onCreate()

        isServiceRunning = true
        headsetEventReceiver = HeadsetEventReceiver {
            Handler(player.getApplicationLooper()).post {
                player.stop()
            }
        }

        registerReceiver(headsetEventReceiver, IntentFilter(Intent.ACTION_HEADSET_PLUG))
    }

    fun start(songs: List<SongModelContract>, index: Int, repeatMode: RepeatMode, shuffleMode: ShuffleMode) {
        if (isStarting) return

        isStarting = true
        playingList = songs
        this.repeatMode = repeatMode
        this.shuffleMode = shuffleMode

        if (!initialized) {
            initializeStart(index)
        } else {
            resumeStart(index)
        }
    }

    fun play() {
        Handler(player.getApplicationLooper()).post {
            player.play()
        }
    }

    fun pause() {
        Handler(player.getApplicationLooper()).post {
            player.pause()
        }
    }

    fun prev() {
        Handler(player.getApplicationLooper()).post {
            try {
                if (player.currentPosition <= PREV_MS) {
                    player.seekToPrevious()
                } else {
                    player.seekTo(0)
                }
            } catch (e: Exception) {
                onError(e.message)
            }
        }
    }

    fun next() {
        Handler(player.getApplicationLooper()).post {
            player.seekToNext()
        }
    }

    fun seek(ms: Long) {
        Handler(player.getApplicationLooper()).post {
            try {
                player.seekTo(ms)
            } catch (e: Exception) {
                onError(e.message)
            }
        }
    }

    fun setSendPlaybackSongChange(sendPlaybackSongChange: (song: SongModelContract) -> Unit) {
        this.sendPlaybackSongChange = sendPlaybackSongChange
    }

    fun setSendIsPlayingChange(sendIsPlayingChange: (isPlaying: Boolean) -> Unit) {
        this.sendIsPlayingChange = sendIsPlayingChange
    }

    fun setRepeat(repeatMode: RepeatMode) {
        Handler(player.getApplicationLooper()).post {
            player.repeatMode = repeatMode.raw
        }
    }

    fun setShuffle(shuffleMode: ShuffleMode) {
        Handler(player.getApplicationLooper()).post {
            player.shuffleModeEnabled = shuffleMode == ShuffleMode.ON
        }
    }

    fun getCurrentTime(callback: (Long) -> Unit) {
        Handler(player.getApplicationLooper()).post {
            val currentTime: Long = player.currentPosition
            callback(currentTime)
        }
    }

    private fun initializeStart(index: Int) {
        setPlayer(index)
        play()

        val notification = createNotification()

        LocalNotificationHelper.createNotificationChannel(applicationContext)
        startForeground(NotificationConstant.NOTIFICATION_ID, notification)

        initialized = true
    }

    private fun resumeStart(index: Int) {
        Handler(player.getApplicationLooper()).post {
            if (isPlaying) {
                player.stop()
            }

            player.removeListener(playerEventListener)
            player.release()
            mediaSession.release()
            setPlayer(index)
            play()
        }
    }

    private fun getCurrentSong(): SongModelContract? {
        if (player.currentMediaItem == null) return null

        return playingList.first { MediaItem.fromUri(it.mediaUri) == player.currentMediaItem }
    }

    @SuppressLint("UnsafeOptInUsageError")
    private fun setPlayer(index: Int) {
        player = ExoPlayer.Builder(applicationContext).build()
        mediaSession = MediaSession.Builder(applicationContext, player).build()
        mediaStyle = MediaStyleNotificationHelper.MediaStyle(mediaSession)

        val mediaItems = playingList.map {
            MediaItem.fromUri(it.mediaUri)
        }

        player.setMediaItems(mediaItems)
        player.prepare()
        player.seekTo(index, 0)
        playerEventListener = PlayerEventListener()
        player.addListener(playerEventListener)
        player.repeatMode = repeatMode.raw
        player.shuffleModeEnabled = shuffleMode == ShuffleMode.ON
    }

    private fun createNotification(): Notification? {
        val song = getCurrentSong() ?: return null
        var albumArtBitmap: Bitmap? = null

        try {
            val source = ImageDecoder.createSource(contentResolver, song.imageUri)

            albumArtBitmap = ImageDecoder.decodeBitmap(source)
        } catch (_: IOException) {
        }

        return LocalNotificationHelper.createNotification(applicationContext, mediaStyle, song.name, song.artistName, albumArtBitmap)
    }

    private fun notification() {
        val notification = createNotification()

        if (notification != null) {
            LocalNotificationHelper.notify(notification, applicationContext)
        }
    }

    private fun onIsPlayingChange() {
        sendIsPlayingChange(player.isPlaying)
    }

    private fun onPlaybackSongChange() {
        val song = getCurrentSong() ?: return

        sendPlaybackSongChange(song)
    }

    private fun onError(message: String?) {
        retry()

//        val playerFlutterApi = PlayerFlutterApiImpl()

//        playerFlutterApi.onError(message ?: "")
    }

    private fun retry() {
        val count = playingList.count()
        val currentIndex = player.currentMediaItemIndex
        val list = playingList.toMutableList()

        list.removeAt(currentIndex)

        if (list.isNotEmpty()) {
            val nextIndex = if (count == currentIndex + 1) currentIndex - 1 else currentIndex

            start(list, nextIndex, repeatMode, shuffleMode)
        } else {
            isStarting = false
        }
    }

    private fun release() {
        if (!initialized) return

        Handler(player.getApplicationLooper()).post {
            if (isPlaying) {
                player.stop()
            }

            player.removeListener(playerEventListener)
            player.release()
            mediaSession.release()
        }
    }

    override fun onBind(intent: Intent): IBinder {
        return binder
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        return START_NOT_STICKY
    }

    @SuppressLint("ServiceCast")
    override fun onDestroy() {
        release()
        LocalNotificationHelper.cancelAll(applicationContext)
        unregisterReceiver(headsetEventReceiver)
        stopForeground(STOP_FOREGROUND_DETACH)
        isServiceRunning = false
    }

    inner class PlayerEventListener : Player.Listener {
        override fun onEvents(player: Player, events: Player.Events) {
            if (events.contains(Player.EVENT_POSITION_DISCONTINUITY)) return

            // onIsPlayingChangedだとシーク操作時に再生/停止ボタンの切り替えが繰り返し発生する
            if (events.contains(Player.EVENT_IS_PLAYING_CHANGED)) {
                isPlaying = player.isPlaying
                onIsPlayingChange()
            }
        }

        override fun onTracksChanged(tracks: Tracks) {
            super.onTracksChanged(tracks)
            onPlaybackSongChange()
            notification()
            isStarting = false
        }

        override fun onPlaybackStateChanged(playbackState: Int) {
            if (playbackState == Player.STATE_ENDED) {
                Handler(player.getApplicationLooper()).post {
                    player.pause()
                    player.seekTo(0, 0)
                    onIsPlayingChange()
                    onPlaybackSongChange()
                }
            }
        }

        override fun onPlayerError(error: PlaybackException) {
            // 曲が削除されている場合
            if (error.errorCode == PlaybackException.ERROR_CODE_IO_FILE_NOT_FOUND) {
                onError(error.message)
            } else {
                isStarting = false
            }
        }
    }

    inner class MusicBinder : Binder() {
        fun getService(): MusicService = this@MusicService
    }
}