class ArtistService: ArtistServiceContract {
    private let artistRepository = ArtistRepository()

    func getAllArtists() -> [[String: Any]] {
        let artists = artistRepository.findAll()

        return artists.map { $0.toMap() }
    }

    func getArtistDetailById(id: String) -> [String: Any]? {
        let artistId = ArtistId(id: id)
        let albumRepository = AlbumRepository()
        let artist = artistRepository.findById(artistId: artistId)

        if artist == nil {
            return nil
        }

        let album = albumRepository.findFirstByArtistId(artistId: artistId)
        let name = artist?.name ?? ""
        let imageId = album?.imageId ?? ""

        return [
            "id": id,
            "name": name,
            "imageId": imageId,
        ]
    }

    func getArtistsByIds(ids: [String]) -> [[String: Any]] {
        let artistIds = ids.map { ArtistId(id: $0) }
        let artists = artistRepository.findByIds(artistIds: artistIds)

        return artists.map { $0.toMap() }
    }
}
