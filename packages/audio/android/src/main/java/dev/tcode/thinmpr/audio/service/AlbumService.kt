package dev.tcode.thinmpr.audio.service

import android.content.Context
import dev.tcode.thinmpr.audio.extension.toMap
import dev.tcode.thinmpr.audio.model.valueObject.AlbumId
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId
import dev.tcode.thinmpr.audio.model.valueObject.SongId
import dev.tcode.thinmpr.audio.repository.AlbumRepository
import dev.tcode.thinmpr.audio.service.contract.AlbumServiceContract

class AlbumService(context: Context) : AlbumServiceContract {
    private val repository = AlbumRepository(context)

    override fun getAllAlbums(): List<Map<String, Any>> {
        val albums = repository.findAll()

        return albums.map { it.toMap() }
    }

    override fun getAlbumById(id: String): Map<String, Any>? {
        val album = repository.findByAlbumId(AlbumId(id))

        return album?.toMap()
    }

    override fun getAlbumsByArtistId(artistId: String): List<Map<String, Any>> {
        val albums = repository.findByArtistId(ArtistId(artistId))

        return albums.map { it.toMap() }
    }

    override fun getRecentAlbums(count: Int): List<Map<String, Any>> {
        val albums = repository.findRecentAlbums(count)

        return albums.map { it.toMap() }
    }
}
