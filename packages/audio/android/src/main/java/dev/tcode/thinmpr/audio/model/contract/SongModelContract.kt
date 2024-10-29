package dev.tcode.thinmpr.audio.model.contract

import android.net.Uri
import dev.tcode.thinmpr.audio.model.valueObject.AlbumId
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId
import dev.tcode.thinmpr.audio.model.valueObject.SongId

interface SongModelContract {
    val id: SongId
    val name: String
    val albumId: AlbumId
    val albumName: String
    val artistId: ArtistId
    val artistName: String
    val imageId: String
    val imageUri: Uri
    val mediaUri: Uri
    val duration: Int
    val trackNumber: Double
}