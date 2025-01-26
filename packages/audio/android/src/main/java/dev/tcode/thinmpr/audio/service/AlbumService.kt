package dev.tcode.thinmpr.audio.service

import android.content.Context
import dev.tcode.thinmpr.audio.model.valueObject.AlbumId
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId
import dev.tcode.thinmpr.audio.repository.AlbumRepository
import dev.tcode.thinmpr.audio.extension.toMap
import dev.tcode.thinmpr.audio.model.valueObject.SongId

class AlbumService(context: Context) {
    private val repository = AlbumRepository(context)

    fun getAllAlbums(): List<Map<String, Any>> {
        val albums = repository.findAll()

        return albums.map { it.toMap() }
    }

    fun getAlbumById(id: String): Map<String, Any>? {
        val album = repository.findByAlbumId(AlbumId(id))

        return album?.toMap()
    }

    fun getAlbumsByArtistId(artistId: String): List<Map<String, Any>> {
        val albums = repository.findByArtistId(ArtistId(artistId))

        return albums.map { it.toMap() }
    }

    fun getRecentAlbums(count: Int): List<Map<String, Any>> {
        val albums = repository.findRecentAlbums(count)

        return albums.map { it.toMap() }
    }
}
