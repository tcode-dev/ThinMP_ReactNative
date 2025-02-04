package dev.tcode.thinmpr.audio

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL
import android.content.Context
import android.graphics.Bitmap
import android.graphics.ImageDecoder
import android.net.Uri
import android.util.Base64
import dev.tcode.thinmpr.audio.extension.toMap
import dev.tcode.thinmpr.audio.service.AlbumService
import dev.tcode.thinmpr.audio.service.ArtistService
import dev.tcode.thinmpr.audio.service.SongService
import dev.tcode.thinmpr.audio.constant.MediaConstant
import dev.tcode.thinmpr.audio.constant.ShuffleMode
import dev.tcode.thinmpr.audio.constant.RepeatMode
import dev.tcode.thinmpr.audio.player.MusicPlayer
import dev.tcode.thinmpr.audio.repository.SongRepository
import dev.tcode.thinmpr.audio.model.valueObject.AlbumId
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId
import dev.tcode.thinmpr.audio.model.valueObject.SongId
import expo.modules.kotlin.Promise
import java.io.ByteArrayOutputStream
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class AudioModule : Module() {
    private val context
        get() = requireNotNull(appContext.reactContext)

    // Each module class must implement the definition function. The definition consists of components
    // that describes the module's functionality and behavior.
    // See https://docs.expo.dev/modules/module-api for more details about available components.
    override fun definition() = ModuleDefinition {
        // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
        // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
        // The module will be accessible from `requireNativeModule('Audio')` in JavaScript.
        Name("Audio")

        // Defines event names that the module can send to JavaScript.
        Events("onPlaybackSongChange", "onIsPlayingChange")

        AsyncFunction("getAllSongs") {
            val songService = SongService(context)
            val songs = songService.getAllSongs()

            return@AsyncFunction songs
        }

        AsyncFunction("getSongsByAlbumId") { id: String ->
            val songService = SongService(context)
            val songs = songService.getSongsByAlbumId(id)

            return@AsyncFunction songs
        }

        AsyncFunction("getSongsByArtistId") { id: String ->
            val songService = SongService(context)
            val songs = songService.getSongsByArtistId(id)

            return@AsyncFunction songs
        }

        AsyncFunction("getSongsByIds") { ids: List<String> ->
            val songService = SongService(context)
            val songs = songService.getSongsByIds(ids)

            return@AsyncFunction songs
        }

        AsyncFunction("getAllAlbums") {
            val albumService = AlbumService(context)
            val albums = albumService.getAllAlbums()

            return@AsyncFunction albums
        }

        AsyncFunction("getAlbumById") { id: String ->
            val albumService = AlbumService(context)
            val album = albumService.getAlbumById(id)

            return@AsyncFunction album
        }

        AsyncFunction("getAlbumsByArtistId") { id: String ->
            val albumService = AlbumService(context)
            val albums = albumService.getAlbumsByArtistId(id)

            return@AsyncFunction albums
        }

        AsyncFunction("getRecentAlbums") { count: Int ->
            val albumService = AlbumService(context)
            val albums = albumService.getRecentAlbums(count)

            return@AsyncFunction albums
        }

        AsyncFunction("getAllArtists") {
            val artistService = ArtistService(context)
            val artists = artistService.getAllArtists()

            return@AsyncFunction artists
        }

        AsyncFunction("getArtistDetailById") { id: String ->
            val artistService = ArtistService(context)
            val artist = artistService.getArtistDetailById(id)

            return@AsyncFunction artist
        }

        AsyncFunction("getArtistsByIds") { ids: List<String> ->
            val artistService = ArtistService(context)
            val artists = artistService.getArtistsByIds(ids)

            return@AsyncFunction artists
        }

        AsyncFunction("getArtwork") { id: String, promise: Promise ->
            CoroutineScope(Dispatchers.IO).launch {
                val albumArtUri = Uri.parse("${MediaConstant.ALBUM_ART}/${id}")
                val source = ImageDecoder.createSource(context.contentResolver, albumArtUri)

                try {
                    val data = ByteArrayOutputStream().use { stream ->
                        val bitmap = ImageDecoder.decodeBitmap(source)
                        bitmap.compress(Bitmap.CompressFormat.PNG, 90, stream)
                        val byteArray = stream.toByteArray()
                        Base64.encodeToString(byteArray, Base64.DEFAULT)
                    }
                    withContext(Dispatchers.Main) {
                        promise.resolve(data)
                    }
                } catch (_: Exception) {
                    withContext(Dispatchers.Main) {
                        promise.resolve(null)
                    }
                }
            }
        }

        AsyncFunction("start") { index: Int, ids: List<String> ->
            val repository = SongRepository(context)
            val songIds = ids.map { SongId(it) }
            val songs = repository.findByIds(songIds)

            MusicPlayer.start(songs, index, context, sendPlaybackSongChange = { song ->
                sendEvent("onPlaybackSongChange", song.toMap())
            }, sendIsPlayingChange = { isPlaying ->
                sendEvent("onIsPlayingChange", mapOf("isPlaying" to isPlaying))
            })
        }

        AsyncFunction("startAllSongs") { index: Int ->
            val repository = SongRepository(context)
            val songs = repository.findAll()

            MusicPlayer.start(songs, index, context, sendPlaybackSongChange = { song ->
                sendEvent("onPlaybackSongChange", song.toMap())
            }, sendIsPlayingChange = { isPlaying ->
                sendEvent("onIsPlayingChange", mapOf("isPlaying" to isPlaying))
            })
        }

        AsyncFunction("startAlbumSongs") { index: Int, albumId: String ->
            val repository = SongRepository(context)
            val songs = repository.findByAlbumId(AlbumId(albumId))

            MusicPlayer.start(songs, index, context, sendPlaybackSongChange = { song ->
                sendEvent("onPlaybackSongChange", song.toMap())
            }, sendIsPlayingChange = { isPlaying ->
                sendEvent("onIsPlayingChange", mapOf("isPlaying" to isPlaying))
            })
        }

        AsyncFunction("startArtistSongs") { index: Int, artistId: String ->
            val repository = SongRepository(context)
            val songs = repository.findByArtistId(ArtistId(artistId))

            MusicPlayer.start(songs, index, context, sendPlaybackSongChange = { song ->
                sendEvent("onPlaybackSongChange", song.toMap())
            }, sendIsPlayingChange = { isPlaying ->
                sendEvent("onIsPlayingChange", mapOf("isPlaying" to isPlaying))
            })
        }

        AsyncFunction("play") { ->
            MusicPlayer.play()
        }

        AsyncFunction("pause") { ->
            MusicPlayer.pause()
        }

        AsyncFunction("prev") { ->
            MusicPlayer.prev()
        }

        AsyncFunction("next") { ->
            MusicPlayer.next()
        }

        AsyncFunction("seek") { time: Long ->
            MusicPlayer.seek(time * 1000)
        }

        AsyncFunction("setRepeat") { mode: Int ->
            val repeatMode = RepeatMode.ofRaw(mode)

            if (repeatMode != null) {
                MusicPlayer.setRepeat(repeatMode)
            }
        }

        AsyncFunction("setShuffle") { mode: Int ->
            val shuffleMode = ShuffleMode.ofRaw(mode)

            if (shuffleMode != null) {
                MusicPlayer.setShuffle(shuffleMode)
            }
        }

        AsyncFunction("getCurrentTime") { promise: Promise ->
            val currentTime = MusicPlayer.getCurrentTime { currentTime ->
                promise.resolve(mapOf("currentTime" to currentTime / 1000))
            }
        }
    }
}
