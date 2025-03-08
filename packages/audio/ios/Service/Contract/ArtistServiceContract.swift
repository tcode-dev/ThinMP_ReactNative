protocol ArtistServiceContract {
    func getAllArtists() -> [[String: Any]]

    func getArtistDetailById(id: String) -> [String: Any]?

    func getArtistsByIds(ids: [String]) -> [[String: Any]]
}
