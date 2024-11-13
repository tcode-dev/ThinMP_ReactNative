package dev.tcode.thinmpr.audio.service

import android.content.Context
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId
import dev.tcode.thinmpr.audio.repository.ArtistRepository
import dev.tcode.thinmpr.audio.extension.toMap
import dev.tcode.thinmpr.audio.model.valueObject.SongId

class ArtistService(context: Context) {
    private val repository = ArtistRepository(context)

    fun getAllArtists(): List<Map<String, Any>> {
        val artists = repository.findAll()

        return artists.map { it.toMap() }
    }
}
