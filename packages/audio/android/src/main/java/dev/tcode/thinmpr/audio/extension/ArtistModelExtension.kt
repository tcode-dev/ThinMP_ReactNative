package dev.tcode.thinmpr.audio.extension

import dev.tcode.thinmpr.audio.model.contract.ArtistModelContract

fun ArtistModelContract.toMap(): Map<String, Any> {
    return mapOf(
        "id" to this.id.raw,
        "name" to this.name,
    )
}
