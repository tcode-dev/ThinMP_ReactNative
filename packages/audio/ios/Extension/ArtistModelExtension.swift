extension ArtistModelContract {
    func toMap() -> [String: Any] {
        return [
            "id": String(self.id.raw),
            "name": self.name,
        ]
    }
}
