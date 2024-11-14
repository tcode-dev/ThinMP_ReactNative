import MediaPlayer

protocol ArtistModelContract {
    var media: MPMediaItemCollection { get }

    var id: ArtistId { get }

    var name: String { get }
}
