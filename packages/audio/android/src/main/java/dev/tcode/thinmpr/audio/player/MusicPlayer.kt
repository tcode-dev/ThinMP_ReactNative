package dev.tcode.thinmpr.audio.player

import android.annotation.SuppressLint
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.content.ServiceConnection
import android.os.IBinder
import dev.tcode.thinmpr.audio.model.contract.SongModelContract
//import dev.tcode.thinmpr.audio.pigeon_output.RepeatMode
//import dev.tcode.thinmpr.audio.pigeon_output.ShuffleMode

@SuppressLint("StaticFieldLeak")
object MusicPlayer{
//    private lateinit var context: Context
    private var musicService: MusicService? = null
    private var connection: ServiceConnection? = null
    private var isServiceBinding = false
    private var bound = false

    fun start(songs: List<SongModelContract>, index: Int, context: Context, sendPlaybackSongChange: (song: SongModelContract) -> Unit) {
        if (!isServiceRunning()) {
            if (isServiceBinding) return

            context.startForegroundService(Intent(context, MusicService::class.java))
            bindService(context) {
                musicService?.start(songs, index)
                musicService?.setSendPlaybackSongChange(sendPlaybackSongChange)
            }

            return
        }

        musicService?.start(songs, index)
    }

    fun play() {
        musicService?.play()
    }

    fun pause() {
        musicService?.pause()
    }

    fun prev() {
        musicService?.prev()
    }

    fun next() {
        musicService?.next()
    }

    fun seek(ms: Long) {
        musicService?.seek(ms)
    }

//    fun setRepeat(repeatMode: RepeatMode) {
//        musicService?.setRepeat(repeatMode)
//    }

//    fun setShuffle(shuffleMode: ShuffleMode) {
//        musicService?.setShuffle(shuffleMode)
//    }

    fun getCurrentTime(): Long {
        return musicService?.getCurrentTime() ?: 0
    }

    fun dispose(context: Context) {
        if (!MusicService.isServiceRunning) return

        unbindService(context)

        val musicServiceIntent = Intent(context, MusicService::class.java)

        context.stopService(musicServiceIntent)
    }

    private fun isServiceRunning(): Boolean {
        return MusicService.isServiceRunning
    }

    private fun bindService(context: Context, callback: () -> Unit? = {}) {
        isServiceBinding = true
        connection = createConnection(callback)
        context.bindService(
            Intent(context, MusicService::class.java), connection!!, Context.BIND_AUTO_CREATE
        )
    }

    private fun unbindService(context: Context) {
        connection?.let {
            context.unbindService(it)
            connection = null
        }
        musicService = null
        bound = false
    }

    private fun createConnection(callback: () -> Unit? = {}): ServiceConnection {
        return object : ServiceConnection {
            override fun onServiceConnected(name: ComponentName, service: IBinder) {
                val binder: MusicService.MusicBinder = service as MusicService.MusicBinder
                musicService = binder.getService()
                callback()
                isServiceBinding = false
                bound = true
            }

            override fun onServiceDisconnected(name: ComponentName) {}
        }
    }
}