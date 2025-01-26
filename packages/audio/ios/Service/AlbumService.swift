class AlbumService {
    private let albumRepository = AlbumRepository()
    
    func getAllAlbums() -> [[String: Any]] {
        let albums = albumRepository.findAll()
        
        return albums.map { $0.toMap() }
    }
    
    func getAlbumById(albumId: String) -> [String: Any]? {
        guard let album = albumRepository.findByAlbumId(albumId: AlbumId(id: albumId)) else {
            return nil
        }
        
        return album.toMap()
    }
    
    func getAlbumsByArtistId(artistId: String) -> [[String: Any]] {
        let albums = albumRepository.findByArtistId(artistId: ArtistId(id: artistId))

        return albums.map { $0.toMap() }
    }

    func getRecentAlbums(count: Int) -> [[String: Any]] {
        let albums = albumRepository.findRecentAlbums(count: count)

        return albums.map { $0.toMap() }
    }
}
