package dev.tcode.thinmpr.audio.extension

import dev.tcode.thinmpr.audio.model.contract.AlbumModelContract

fun AlbumModelContract.toMap(): Map<String, Any> {
  return mapOf(
    "id" to this.id.raw,
    "name" to this.name,
    "artistId" to this.artistId.raw,
    "artistName" to this.artistName,
    "imageId" to this.imageId
  )
}
