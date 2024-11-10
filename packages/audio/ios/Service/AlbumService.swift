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
}
