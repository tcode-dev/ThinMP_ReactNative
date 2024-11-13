package dev.tcode.thinmpr.audio.model.contract

import dev.tcode.thinmpr.audio.model.valueObject.ArtistId

interface ArtistModelContract {
    val id: ArtistId
    val name: String
}
