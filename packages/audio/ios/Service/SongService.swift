class SongService {
    private let songRepository = SongRepository()
    
    func getAllSongs() -> [[String: Any]] {
        let songs = songRepository.findAll()
        
        return songs.map { $0.toMap() }
    }
}
