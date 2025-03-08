protocol SongRepositoryContract {
    func findAll() -> [SongModelContract]
    
    func findBySongId(songId: SongId) -> SongModelContract?
    
    func findBySongIds(songIds: [SongId]) -> [SongModelContract]
    
    func findByAlbumId(albumId: AlbumId) -> [SongModelContract]
    
    func findByAlbumIds(albumIds: [AlbumId]) -> [SongModelContract]
}
