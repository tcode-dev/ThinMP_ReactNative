package dev.tcode.thinmpr.audio.repository

import android.content.Context
import android.provider.MediaStore
import dev.tcode.thinmpr.audio.model.ArtistModel
import dev.tcode.thinmpr.audio.model.contract.ArtistModelContract
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId
import dev.tcode.thinmpr.audio.repository.contract.ArtistRepositoryContract

class ArtistRepository(context: Context) : ArtistRepositoryContract, MediaStoreRepository<ArtistModelContract>(
    context, MediaStore.Audio.Artists.EXTERNAL_CONTENT_URI, arrayOf(
        MediaStore.Audio.Artists._ID,
        MediaStore.Audio.Artists.ARTIST,
        MediaStore.Audio.Artists.NUMBER_OF_ALBUMS,
        MediaStore.Audio.Artists.NUMBER_OF_TRACKS
    )
) {
    override fun findAll(): List<ArtistModelContract> {
        selection = null
        selectionArgs = null
        sortOrder = MediaStore.Audio.Artists.ARTIST + " ASC"

        return getList();
    }

    override fun findById(artistId: ArtistId): ArtistModelContract? {
        selection = MediaStore.Audio.Media._ID + " = ?"
        selectionArgs = arrayOf(artistId.raw)
        sortOrder = null

        return get()
    }

    override fun findByIds(artistIds: List<ArtistId>): List<ArtistModelContract> {
        val ids = artistIds.map { it.raw }

        selection = MediaStore.Audio.Media._ID + " IN (" + makePlaceholders(ids.size) + ")"
        selectionArgs = toStringArray(ids)
        sortOrder = null

        return getList()
    }

    private fun getId(): String {
        return cursor?.getColumnIndex(MediaStore.Audio.Artists._ID)?.let { cursor?.getString(it) } ?: ""
    }

    private fun getArtistName(): String {
        return cursor?.getColumnIndex(MediaStore.Audio.Media.ARTIST)?.let { cursor?.getString(it) } ?: ""
    }

    private fun getNumberOfAlbums(): String {
        return cursor?.getColumnIndex(MediaStore.Audio.Artists.NUMBER_OF_ALBUMS)?.let { cursor?.getString(it) } ?: ""
    }

    private fun getNumberOfTracks(): String {
        return cursor?.getColumnIndex(MediaStore.Audio.Artists.NUMBER_OF_TRACKS)?.let { cursor?.getString(it) } ?: ""
    }

    private fun getArtist(): ArtistModelContract {
        return ArtistModel(
            id = getId(),
            name = getArtistName(),
        )
    }

    override fun fetch(): ArtistModelContract {
        return getArtist()
    }
}