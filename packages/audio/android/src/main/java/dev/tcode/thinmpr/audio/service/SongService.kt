package dev.tcode.thinmpr.audio.service

import android.content.Context
import dev.tcode.thinmpr.audio.model.valueObject.AlbumId
import dev.tcode.thinmpr.audio.model.valueObject.ArtistId
import dev.tcode.thinmpr.audio.repository.SongRepository
import dev.tcode.thinmpr.audio.extension.toDTO
import dev.tcode.thinmpr.audio.model.valueObject.SongId
import dev.tcode.thinmpr.audio.dto.SongDTO

class SongService(context: Context) {
    private val repository = SongRepository(context)

    fun getAllSongs(): List<SongDTO> {
        val songs = repository.findAll()

        return songs.map { it.toDTO() }
    }

//    override fun getSongsByArtistId(artistId: String): List<SongDTO> {
//        val songs = repository.findByArtistId(ArtistId(artistId))
//
//        return songs.map { it.toPigeon() }
//    }
//
//    override fun getSongsByIds(ids: List<String>): List<SongDTO> {
//        val songIds = ids.map { SongId(it) }
//        val songs = repository.findByIds(songIds)
//
//        return songs.map { it.toPigeon() }
//    }
//
//    override fun getSongsByAlbumId(albumId: String): List<SongDTO> {
//        val songs = repository.findByAlbumId(AlbumId(albumId))
//
//        return songs.map { it.toPigeon() }
//    }
//
//    override fun getSongById(id: String): SongDTO? {
//        val songId = SongId(id)
//        val song = repository.findById(songId) ?: return null
//
//        return song.toPigeon()
//    }
}
