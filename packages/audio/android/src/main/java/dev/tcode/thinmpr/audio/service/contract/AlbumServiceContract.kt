package dev.tcode.thinmpr.audio.service.contract

interface AlbumServiceContract {
    fun getAllAlbums(): List<Map<String, Any>> 

    fun getAlbumById(id: String): Map<String, Any>?

    fun getAlbumsByArtistId(artistId: String): List<Map<String, Any>>

    fun getRecentAlbums(count: Int): List<Map<String, Any>>
}
