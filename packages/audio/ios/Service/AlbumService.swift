class AlbumService {
    private let albumRepository = AlbumRepository()
    
    func getAllAlbums() -> [[String: Any]] {
        let albums = albumRepository.findAll()
        
        return albums.map { $0.toMap() }
    }
}
