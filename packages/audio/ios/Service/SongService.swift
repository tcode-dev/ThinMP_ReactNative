class SongService {
    private let albumRepository = AlbumRepository()
    private let songRepository = SongRepository()
    
    func getAllSongs() -> [[String: Any]] {
        let songs = songRepository.findAll()
        
        return songs.map { $0.toMap() }
    }

    func getSongsByAlbumId(albumId: String) -> [[String: Any]] {
        let songs = songRepository.findByAlbumId(albumId: AlbumId(id: albumId))
        
        return songs.map { $0.toMap() }
    }
    
    func getSongsByArtistId(artistId: String) -> [[String: Any]] {
        let albums = albumRepository.findByArtistId(artistId: ArtistId(id: artistId))
        let albumIds = albums.map { $0.id }
        let songs = songRepository.findByAlbumIds(albumIds: albumIds)

        return songs.map { $0.toMap() }
    }
}
