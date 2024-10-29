package dev.tcode.thinmpr.audio.repository.contract

import dev.tcode.thinmpr.audio.model.contract.SongModelContract
import dev.tcode.thinmpr.audio.model.valueObject.AlbumId
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId
import dev.tcode.thinmpr.audio.model.valueObject.SongId

interface SongRepositoryContract {
    fun findAll(): List<SongModelContract>

    fun findById(songId: SongId): SongModelContract?

    fun findByIds(songIds: List<SongId>): List<SongModelContract>

    fun findByAlbumId(albumId: AlbumId): List<SongModelContract>

    fun findByArtistId(artistId: ArtistId): List<SongModelContract>
}