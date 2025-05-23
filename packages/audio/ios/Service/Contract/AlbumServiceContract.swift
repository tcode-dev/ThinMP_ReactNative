protocol AlbumServiceContract {
    func getAllAlbums() -> [[String: Any]]

    func getAlbumById(albumId: String) -> [String: Any]?

    func getAlbumsByArtistId(artistId: String) -> [[String: Any]]

    func getRecentAlbums(count: Int) -> [[String: Any]]
}
