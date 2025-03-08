package dev.tcode.thinmpr.audio.service.contract

interface SongServiceContract {
    fun getAllSongs(): List<Map<String, Any>>

    fun getSongsByArtistId(artistId: String): List<Map<String, Any>> 

    fun getSongsByIds(ids: List<String>): List<Map<String, Any>>

    fun getSongsByAlbumId(albumId: String): List<Map<String, Any>>

    fun getSongById(id: String): Map<String, Any>?
}