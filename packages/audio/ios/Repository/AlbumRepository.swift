import MediaPlayer

class AlbumRepository: AlbumRepositoryContract {
    func findAll() -> [AlbumModelContract] {
        let property = MPMediaPropertyPredicate(
            value: false,
            forProperty: MPMediaItemPropertyIsCloudItem
        )
        let query = MPMediaQuery.albums()

        query.addFilterPredicate(property)

        return query.collections!.map { AlbumModel(media: $0) }
    }

    func findByAlbumId(albumId: AlbumId) -> AlbumModelContract? {
        let property = MPMediaPropertyPredicate(
            value: albumId.raw,
            forProperty: MPMediaItemPropertyAlbumPersistentID
        )
        let query = MPMediaQuery.albums()

        query.addFilterPredicate(property)

        return query.collections!.map { AlbumModel(media: $0) }.first
    }

    func findByArtistId(artistId: ArtistId) -> [AlbumModelContract] {
        let property = MPMediaPropertyPredicate(
            value: artistId.raw,
            forProperty: MPMediaItemPropertyArtistPersistentID
        )
        let query = MPMediaQuery.albums()

        query.addFilterPredicate(property)

        return query.collections!.sorted(by: {
            String($0.representativeItem?.albumTitle ?? "")
                < String($1.representativeItem?.albumTitle ?? "")
        })
        .map { AlbumModel(media: $0) }
    }

    func findFirstByArtistId(artistId: ArtistId) -> AlbumModelContract? {
        let property = MPMediaPropertyPredicate(
            value: artistId.raw,
            forProperty: MPMediaItemPropertyArtistPersistentID
        )
        let query = MPMediaQuery.albums()

        query.addFilterPredicate(property)

        let album = query.collections!.sorted(by: {
            String($0.representativeItem?.albumTitle ?? "")
                < String($1.representativeItem?.albumTitle ?? "")
        }).first

        if album == nil {
            return nil
        }

        return AlbumModel(media: album!)
    }

    func findRecentAlbums(count: Int) -> [AlbumModelContract] {
        let property = MPMediaPropertyPredicate(
            value: false,
            forProperty: MPMediaItemPropertyIsCloudItem
        )
        let query = MPMediaQuery.albums()

        query.addFilterPredicate(property)

        return query.collections!.sorted(by: { left, right in
            left.representativeItem!.dateAdded
                > right.representativeItem!.dateAdded
        })
        .prefix(count)
        .map { AlbumModel(media: $0) }
    }
}
