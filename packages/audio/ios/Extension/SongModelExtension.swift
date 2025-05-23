extension SongModelContract {
    func toMap() -> [String: Any] {
        return [
            "id": String(self.id.raw),
            "name": self.name,
            "albumId": String(self.albumId.raw),
            "albumName": self.albumName,
            "artistId": String(self.artistId.raw),
            "artistName": self.artistName,
            "imageId": self.imageId,
            "duration": Int(self.duration),
            "trackNumber": self.trackNumber,
        ]
    }
}
