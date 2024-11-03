import MediaPlayer

protocol SongModelContract {
    var media: MPMediaItemCollection { get }

    var id: SongId { get }

    var name: String { get }

    var albumId: AlbumId { get }

    var albumName: String { get }

    var artistId: ArtistId { get }

    var artistName: String { get }

    var imageId: String { get }

    var artwork: MPMediaItemArtwork? { get }

    var duration: Double { get }
    
    var trackNumber: Int { get }
}
