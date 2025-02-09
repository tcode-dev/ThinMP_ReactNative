const { withMainApplication } = require('@expo/config-plugins')

const withMainApplicationConfig = (expoConfig) => withMainApplication(expoConfig, config => {
  const pattern = /class MainApplication\s*:\s*Application\(\),\s*ReactApplication\s*\{/;
  const replacement = `
import android.app.Activity
import android.os.Bundle

class MainApplication : Application(), ReactApplication, Application.ActivityLifecycleCallbacks {
  override fun onActivityDestroyed(p0: Activity) {
//    if (!MusicService.isServiceRunning) return

//    MusicPlayer.dispose()

//    val musicServiceIntent = Intent(applicationContext, MusicService::class.java)

//    applicationContext.stopService(musicServiceIntent)
  }

  override fun onActivityCreated(p0: Activity, p1: Bundle?) {}

  override fun onActivityStarted(p0: Activity) {}

  override fun onActivityResumed(p0: Activity) {}

  override fun onActivityPaused(p0: Activity) {}

  override fun onActivityStopped(p0: Activity) {}

  override fun onActivitySaveInstanceState(p0: Activity, p1: Bundle) {}
`;
  const config2 = config.modResults.contents.replace(pattern, replacement);
  const pattern2 = /ApplicationLifecycleDispatcher.onApplicationCreate\(this\)/;
  const replacement2 = `ApplicationLifecycleDispatcher.onApplicationCreate(this)
    registerActivityLifecycleCallbacks(this)
`;

  config.modResults.contents = config2.replace(pattern2, replacement2);
  return config
})

module.exports = withMainApplicationConfig
