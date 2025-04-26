package dev.tcode.thinmpr.audio.service

import android.content.Context
import dev.tcode.thinmpr.audio.extension.toMap
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId
import dev.tcode.thinmpr.audio.model.valueObject.SongId
import dev.tcode.thinmpr.audio.repository.AlbumRepository
import dev.tcode.thinmpr.audio.repository.ArtistRepository
import dev.tcode.thinmpr.audio.service.contract.ArtistServiceContract

class ArtistService(context: Context): ArtistServiceContract {
    private val artistRepository = ArtistRepository(context)
    private val albumRepository = AlbumRepository(context)

    override fun getAllArtists(): List<Map<String, Any>> {
        val artists = artistRepository.findAll()

        return artists.map { it.toMap() }
    }

    override fun getArtistDetailById(id: String): Map<String, Any>? {
        val artistId = ArtistId(id)
        val artist = artistRepository.findById(artistId) ?: return null
        val album = albumRepository.findFirstByArtistId(artistId)
        val name = artist?.name ?: ""
        val imageId = album?.imageId ?: ""

        return mapOf(
            "id" to artistId.raw,
            "name" to name,
            "imageId" to imageId,
        )
    }

    override fun getArtistsByIds(ids: List<String>): List<Map<String, Any>> {
        val artistIds = ids.map { ArtistId(it) }
        val artists = artistRepository.findByIds(artistIds)

        return artists.map { it.toMap() }
    }
}
