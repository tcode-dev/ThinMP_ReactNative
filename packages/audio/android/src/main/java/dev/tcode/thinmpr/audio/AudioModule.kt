package dev.tcode.thinmpr.audio

import android.content.Context
import android.graphics.Bitmap
import android.graphics.ImageDecoder
import android.net.Uri
import android.util.Base64
import dev.tcode.thinmpr.audio.service.AlbumService
import dev.tcode.thinmpr.audio.service.SongService
import dev.tcode.thinmpr.audio.constant.MediaConstant
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise
import java.io.ByteArrayOutputStream
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class AudioModule : Module() {
  private val context
    get() = requireNotNull(appContext.reactContext)

  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('Audio')` in JavaScript.
    Name("Audio")

    // Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.
    Constants(
      "PI" to Math.PI
    )

    // Defines event names that the module can send to JavaScript.
    Events("onChange")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      "Hello world! 👋"
    }

    AsyncFunction("getAllSongs") {
      val songService = SongService(context)
      val songs = songService.getAllSongs()

      return@AsyncFunction songs
    }

    AsyncFunction("getAllAlbums") {
      val albumService = AlbumService(context)
      val albums = albumService.getAllAlbums()

      return@AsyncFunction albums
    }

    AsyncFunction("getAlbumById") { id: String ->
      val albumService = AlbumService(context)
      val album = albumService.getAlbumById(id)

      return@AsyncFunction album
    }

    AsyncFunction("getArtwork") { id: String, promise: Promise ->
      CoroutineScope(Dispatchers.IO).launch {
        val albumArtUri = Uri.parse("${MediaConstant.ALBUM_ART}/${id}")
        val source = ImageDecoder.createSource(context.contentResolver, albumArtUri)

        try {
          val data = ByteArrayOutputStream().use { stream ->
            val bitmap = ImageDecoder.decodeBitmap(source)
            bitmap.compress(Bitmap.CompressFormat.PNG, 90, stream)
            val byteArray = stream.toByteArray()
            Base64.encodeToString(byteArray, Base64.DEFAULT)
          }
          withContext(Dispatchers.Main) {
            promise.resolve(data)
          }
        } catch (_: Exception) {
          withContext(Dispatchers.Main) {
            promise.resolve(null)
          }
        }
      }
    }

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    AsyncFunction("setValueAsync") { value: String ->
      // Send an event to JavaScript.
      sendEvent(
        "onChange", mapOf(
          "value" to value
        )
      )
    }

    // Enables the module to be used as a native view. Definition components that are accepted as part of
    // the view definition: Prop, Events.
    View(AudioView::class) {
      // Defines a setter for the `name` prop.
      Prop("name") { view: AudioView, prop: String ->
        println(prop)
      }
    }
  }
}
