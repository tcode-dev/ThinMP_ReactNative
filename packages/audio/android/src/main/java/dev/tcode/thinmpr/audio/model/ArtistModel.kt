package dev.tcode.thinmpr.audio.model

import dev.tcode.thinmpr.audio.model.contract.ArtistModelContract
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId

class ArtistModel(
    id: String,
    name: String
) : ArtistModelContract {
    override val id: ArtistId = ArtistId(id)
    override val name: String = name
}
