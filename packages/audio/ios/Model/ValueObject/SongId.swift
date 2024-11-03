class SongId: Id {
    func equals(_ songId: SongId) -> Bool {
        return songId.raw == raw
    }
}
