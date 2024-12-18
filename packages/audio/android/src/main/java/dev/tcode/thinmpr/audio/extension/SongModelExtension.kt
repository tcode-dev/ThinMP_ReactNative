package dev.tcode.thinmpr.audio.extension

import dev.tcode.thinmpr.audio.model.contract.SongModelContract
import kotlin.math.floor

fun SongModelContract.toMap(): Map<String, Any> {
  return mapOf(
    "id" to this.id.raw,
    "name" to this.name,
    "albumId" to this.albumId.raw,
    "albumName" to this.albumName,
    "artistId" to this.artistId.raw,
    "artistName" to this.artistName,
    "imageId" to this.imageId,
    "duration" to floor(this.duration.toDouble() / 1000),
    "trackNumber" to this.trackNumber
  )
}
