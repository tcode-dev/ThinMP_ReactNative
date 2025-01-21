package dev.tcode.thinmpr.audio.service

import android.content.Context
import dev.tcode.thinmpr.audio.model.valueObject.AlbumId
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId
import dev.tcode.thinmpr.audio.repository.SongRepository
import dev.tcode.thinmpr.audio.extension.toMap
import dev.tcode.thinmpr.audio.model.valueObject.SongId

class SongService(context: Context) {
    private val repository = SongRepository(context)

    fun getAllSongs(): List<Map<String, Any>> {
        val songs = repository.findAll()

        return songs.map { it.toMap() }
    }

    fun getSongsByArtistId(artistId: String): List<Map<String, Any>> {
        val songs = repository.findByArtistId(ArtistId(artistId))

        return songs.map { it.toMap() }
    }

    fun getSongsByIds(ids: List<String>): List<Map<String, Any>> {
        val songIds = ids.map { SongId(it) }
        val songs = repository.findByIds(songIds)

        return songs.map { it.toMap() }
    }

    fun getSongsByAlbumId(albumId: String): List<Map<String, Any>> {
        val songs = repository.findByAlbumId(AlbumId(albumId))

        return songs.map { it.toMap() }
    }

//    override fun getSongById(id: String): SongDTO? {
//        val songId = SongId(id)
//        val song = repository.findById(songId) ?: return null
//
//        return song.toPigeon()
//    }
}
