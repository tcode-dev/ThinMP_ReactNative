package dev.tcode.thinmpr.audio.repository.contract

import dev.tcode.thinmpr.audio.model.contract.AlbumModelContract
import dev.tcode.thinmpr.audio.model.valueObject.AlbumId
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId

interface AlbumRepositoryContract {
    fun findAll(): List<AlbumModelContract>

    fun findByAlbumId(albumId: AlbumId): AlbumModelContract?

//    fun findByArtistId(artistId: ArtistId): List<AlbumModelContract>

    fun findFirstByArtistId(artistId: ArtistId): AlbumModelContract?

//    fun findRecentAlbums(limit: Int): List<AlbumModelContract>
}