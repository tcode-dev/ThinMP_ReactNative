protocol SongServiceContract {
    func getAllSongs() -> [[String: Any]]

    func getSongsByAlbumId(albumId: String) -> [[String: Any]]

    func getSongsByArtistId(artistId: String) -> [[String: Any]]

    func getSongById(id: String) -> [String: Any]?

    func getSongsByIds(ids: [String]) -> [[String: Any]]
}
