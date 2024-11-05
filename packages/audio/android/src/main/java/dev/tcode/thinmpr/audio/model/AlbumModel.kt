package dev.tcode.thinmpr.audio.model

import android.net.Uri
import dev.tcode.thinmpr.audio.constant.MediaConstant
import dev.tcode.thinmpr.audio.model.contract.AlbumModelContract
import dev.tcode.thinmpr.audio.model.valueObject.AlbumId
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId

class AlbumModel(
    id: String,
    name: String,
    artistId: String,
    artistName: String
): AlbumModelContract {
    override val id: AlbumId = AlbumId(id)
    override val name: String = name
    override val artistId: ArtistId = ArtistId(artistId)
    override val artistName: String = artistName

    override val imageId: String
        get() = id.raw

    override val imageUri: Uri
        get() =  Uri.parse("${MediaConstant.ALBUM_ART}/${id.raw}")
}
