protocol ArtistRepositoryContract {
    func findAll() -> [ArtistModelContract]

    func findById(artistId: ArtistId) -> ArtistModelContract?
    
    func findByIds(artistIds: [ArtistId]) -> [ArtistModelContract]
}
