package dev.tcode.thinmpr.audio.repository.contract

import dev.tcode.thinmpr.audio.model.contract.ArtistModelContract
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId

interface ArtistRepositoryContract {
    fun findAll(): List<ArtistModelContract>

    fun findById(artistId: ArtistId): ArtistModelContract?

    fun findByIds(artistIds: List<ArtistId>): List<ArtistModelContract>
}