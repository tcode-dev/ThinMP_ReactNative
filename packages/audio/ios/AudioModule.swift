import ExpoModulesCore
import MediaPlayer

public class AudioModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('Audio')` in JavaScript.
    Name("Audio")

    // Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.
    Constants([
      "PI": Double.pi
    ])

    // Defines event names that the module can send to JavaScript.
    Events("onChange")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      return "Hello world! 👋"
    }

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    AsyncFunction("setValueAsync") { (value: String) in
      // Send an event to JavaScript.
      self.sendEvent("onChange", [
        "value": value
      ])
    }

    // Enables the module to be used as a native view. Definition components that are accepted as part of the
    // view definition: Prop, Events.
    View(AudioView.self) {
      // Defines a setter for the `url` prop.
      Prop("url") { (view: AudioView, url: URL) in
        if view.webView.url != url {
          view.webView.load(URLRequest(url: url))
        }
      }

      Events("onLoad")
    }

    AsyncFunction("getAllSongs") { (promise: Promise) in
      let songService = SongService()
      let songs = songService.getAllSongs()

      promise.resolve(songs)
    }

    AsyncFunction("getSongsByAlbumId") { (albumId: String, promise: Promise) in
      let songService = SongService()
      let songs = songService.getSongsByAlbumId(albumId: albumId)

      promise.resolve(songs)
    }

    AsyncFunction("getSongsByArtistId") { (artistId: String, promise: Promise) in
        let songService = SongService()
        let songs = songService.getSongsByArtistId(artistId: artistId)

        promise.resolve(songs)
    }

    AsyncFunction("getAllAlbums") { (promise: Promise) in
      let albumService = AlbumService()
      let albums = albumService.getAllAlbums()

      promise.resolve(albums)
    }

    AsyncFunction("getAlbumById") { (albumId: String, promise: Promise) in
      let albumService = AlbumService()
      let album = albumService.getAlbumById(albumId: albumId)

      promise.resolve(album)
    }

    AsyncFunction("getAlbumsByArtistId") { (artistId: String, promise: Promise) in
        let albumService = AlbumService()
        let albums = albumService.getAlbumsByArtistId(artistId: artistId)

        promise.resolve(albums)
    }

    AsyncFunction("getAllArtists") { (promise: Promise) in
      let artistService = ArtistService()
      let artists = artistService.getAllArtists()

      promise.resolve(artists)
    }

    AsyncFunction("getArtistDetailById") { (artistId: String, promise: Promise) in
        let artistService = ArtistService()
        let artist = artistService.getArtistDetailById(id: artistId)

        promise.resolve(artist)
    }

    AsyncFunction("getArtwork") { (id: String, promise: Promise) in
      let repository = SongRepository()
      let song = repository.findBySongId(songId: SongId(id: id))
      let image = song?.artwork?.image(at: CGSize(width: 100, height: 100))
      let data = image?.pngData() as Data?
      let base64String = data?.base64EncodedString() ?? ""

      promise.resolve(base64String)
    }

    Function("checkPermission") {
      let status = MPMediaLibrary.authorizationStatus()
      let result = status == .authorized

      return result
    }

    AsyncFunction("requestPermission") { (promise: Promise) in
      MPMediaLibrary.requestAuthorization { status in
        let result = status == .authorized

        promise.resolve(result)
      }
    }

    AsyncFunction("startAllSongs") { (index: Int) in
      let songRepository = SongRepository()
      let songs = songRepository.findAll()

      MusicPlayer.shared.start(list: songs, currentIndex: index)
    }
  }
}
