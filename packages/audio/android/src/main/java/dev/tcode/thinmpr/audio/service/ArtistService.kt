package dev.tcode.thinmpr.audio.service

import android.content.Context
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId
import dev.tcode.thinmpr.audio.repository.AlbumRepository
import dev.tcode.thinmpr.audio.repository.ArtistRepository
import dev.tcode.thinmpr.audio.extension.toMap
import dev.tcode.thinmpr.audio.model.valueObject.SongId

class ArtistService(context: Context) {
    private val artistRepository = ArtistRepository(context)
    private val albumRepository = AlbumRepository(context)

    fun getAllArtists(): List<Map<String, Any>> {
        val artists = artistRepository.findAll()

        return artists.map { it.toMap() }
    }

    fun getArtistDetailById(id: String): Map<String, Any>? {
        val artistId = ArtistId(id)
        val artist = artistRepository.findById(artistId)
        val album = albumRepository.findFirstByArtistId(artistId)
        val name = artist?.name ?: ""
        val imageId = album?.imageId ?: ""

        return mapOf(
            "id" to artistId.raw,
            "name" to name,
            "imageId" to imageId,
        )
    }

    fun getArtistsByIds(ids: List<String>): List<Map<String, Any>> {
        val artistIds = ids.map { ArtistId(it) }
        val artists = artistRepository.findByIds(artistIds)

        return artists.map { it.toMap() }
    }
}
