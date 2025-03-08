package dev.tcode.thinmpr.audio.service.contract

interface ArtistServiceContract {
    fun getAllArtists(): List<Map<String, Any>>

    fun getArtistDetailById(id: String): Map<String, Any>?

    fun getArtistsByIds(ids: List<String>): List<Map<String, Any>>
}