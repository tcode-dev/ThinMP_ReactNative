const { withMainApplication } = require('@expo/config-plugins')

const withMainApplicationConfig = (expoConfig) => withMainApplication(expoConfig, config => {
  const pattern = /class MainApplication\s*:\s*Application\(\),\s*ReactApplication\s*\{/;
  const replacement = `
import android.app.Activity

class MainApplication : Application(), ReactApplication {
//  override fun onActivityDestroyed(p0: Activity) {
//    if (!MusicService.isServiceRunning) return

//    MusicPlayer.dispose()

//     val musicServiceIntent = Intent(applicationContext, MusicService::class.java)

//     applicationContext.stopService(musicServiceIntent)
//  }
`;

  config.modResults.contents = config.modResults.contents.replace(pattern, replacement);
  return config
})

module.exports = withMainApplicationConfig
