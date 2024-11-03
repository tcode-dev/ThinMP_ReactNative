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

    AsyncFunction("getAllSongs") { (promise: Promise) in
      MPMediaLibrary.requestAuthorization { status in
        switch status {
          case .authorized:
            // アクセスが許可された場合の処理
            let songService = SongService()
            let songs = songService.getAllSongs()

            promise.resolve(songs)
          case .denied, .restricted:
            // アクセスが拒否された場合の処理
            promise.resolve([])
          case .notDetermined:
            // 権限がまだ決定されていない場合の処理
            promise.resolve([])
          @unknown default:
            // 予期しないケースの処理
            promise.resolve([])
        }
      }
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
      // Defines a setter for the `name` prop.
      Prop("name") { (view: AudioView, prop: String) in
        print(prop)
      }
    }
  }
}
