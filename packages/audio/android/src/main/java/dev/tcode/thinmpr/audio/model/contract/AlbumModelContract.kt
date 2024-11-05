package dev.tcode.thinmpr.audio.model.contract

import android.net.Uri
import dev.tcode.thinmpr.audio.model.valueObject.AlbumId
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId

interface AlbumModelContract {
    val id: AlbumId
    val name: String
    val artistId: ArtistId
    val artistName: String
    val imageId: String
    val imageUri: Uri
}
