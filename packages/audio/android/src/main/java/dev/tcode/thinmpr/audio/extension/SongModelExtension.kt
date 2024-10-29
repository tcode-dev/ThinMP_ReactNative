package dev.tcode.thinmpr.audio.extension

import dev.tcode.thinmpr.audio.model.contract.SongModelContract
import dev.tcode.thinmpr.audio.dto.SongDTO

fun SongModelContract.toDTO(): SongDTO {
    return SongDTO(
        id = this.id.raw,
        name = this.name,
        albumId = this.albumId.raw,
        albumName = this.albumName,
        artistId = this.artistId.raw,
        artistName = this.artistName,
        imageId = this.imageId,
        duration = this.duration.toDouble() / 1000,
        trackNumber = this.trackNumber
    )
}
