class ArtistService {
    private let artistRepository = ArtistRepository()
    
    func getAllArtists() -> [[String: Any]] {
        let artists = artistRepository.findAll()
        
        return artists.map { $0.toMap() }
    }

    // func getArtistById(artistId: String) -> [String: Any]? {
    //     guard let artist = artistRepository.findByArtistId(artistId: ArtistId(id: artistId)) else {
    //         return nil
    //     }

    //     return artist.toMap()
    // }
}
