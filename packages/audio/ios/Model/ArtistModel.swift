import MediaPlayer

struct ArtistModel: ArtistModelContract {
    let media: MPMediaItemCollection

    var id: ArtistId {
        ArtistId(id: media.representativeItem?.artistPersistentID ?? 0)
    }

    var name: String {
        media.representativeItem?.artist ?? "undefined"
    }
}
