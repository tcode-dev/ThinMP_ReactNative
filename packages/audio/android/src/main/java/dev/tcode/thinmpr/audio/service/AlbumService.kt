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
}
