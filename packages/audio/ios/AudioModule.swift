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

    // Defines event names that the module can send to JavaScript.
    Events("onPlaybackSongChange", "onIsPlayingChange")

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

      MusicPlayer.shared.start(list: songs, currentIndex: index, sendPlaybackSongChange: { song in
          self.sendEvent("onPlaybackSongChange", song.toMap())
      }, sendIsPlayingChange: { isPlaying in
          self.sendEvent("onIsPlayingChange", ["isPlaying": isPlaying])
      })
    }

    AsyncFunction("startAlbumSongs") { (index: Int, albumId: String) in
      let songRepository = SongRepository()
      let songs = songRepository.findByAlbumId(albumId: AlbumId(id: albumId))

      MusicPlayer.shared.start(list: songs, currentIndex: index, sendPlaybackSongChange: { song in
          self.sendEvent("onPlaybackSongChange", song.toMap())
      }, sendIsPlayingChange: { isPlaying in
          self.sendEvent("onIsPlayingChange", ["isPlaying": isPlaying])
      })
    }

    AsyncFunction("startArtistSongs") { (index: Int, artistId: String) in
      let albumRepository = AlbumRepository()
      let songRepository = SongRepository()
      let albums = albumRepository.findByArtistId(artistId: ArtistId(id: artistId))
      let albumIds = albums.map { $0.id }
      let songs = songRepository.findByAlbumIds(albumIds: albumIds)

      MusicPlayer.shared.start(list: songs, currentIndex: index, sendPlaybackSongChange: { song in
          self.sendEvent("onPlaybackSongChange", song.toMap())
      }, sendIsPlayingChange: { isPlaying in
          self.sendEvent("onIsPlayingChange", ["isPlaying": isPlaying])
      })
    }
  }
}
