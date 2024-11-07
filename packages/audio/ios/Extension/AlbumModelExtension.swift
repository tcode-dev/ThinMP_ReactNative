extension AlbumModelContract {
    func toMap() -> [String: Any] {
        return [
            "id": String(self.id.raw),
            "name": self.name,
            "artistId": String(self.artistId.raw),
            "artistName": self.artistName,
            "imageId": self.imageId,
        ]
    }
}
