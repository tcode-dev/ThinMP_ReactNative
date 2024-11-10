class SongService {
    private let songRepository = SongRepository()
    
    func getAllSongs() -> [[String: Any]] {
        let songs = songRepository.findAll()
        
        return songs.map { $0.toMap() }
    }

    func getSongsByAlbumId(albumId: String) -> [[String: Any]] {
        let songs = songRepository.findByAlbumId(albumId: AlbumId(id: albumId))
        
        return songs.map { $0.toMap() }
    }
}
