const { withMainApplication } = require('@expo/config-plugins')

const withMainApplicationConfig = (expoConfig) => withMainApplication(expoConfig, config => {
  const pattern = /(class MainApplication\s*:\s*Application\(\),\s*ReactApplication)\s*\{/;
  const replacement = `
import android.app.Activity
import android.os.Bundle
import dev.tcode.thinmpr.audio.player.MusicPlayer

$1, Application.ActivityLifecycleCallbacks {
  override fun onActivityDestroyed(p0: Activity) {
    MusicPlayer.dispose(applicationContext)
  }

  override fun onActivityCreated(p0: Activity, p1: Bundle?) {}

  override fun onActivityStarted(p0: Activity) {}

  override fun onActivityResumed(p0: Activity) {}

  override fun onActivityPaused(p0: Activity) {}

  override fun onActivityStopped(p0: Activity) {}

  override fun onActivitySaveInstanceState(p0: Activity, p1: Bundle) {}
`;
  const config2 = config.modResults.contents.replace(pattern, replacement);
  const pattern2 = /(ApplicationLifecycleDispatcher.onApplicationCreate\(this\))/;
  const replacement2 = `$1
    registerActivityLifecycleCallbacks(this)
`;

  config.modResults.contents = config2.replace(pattern2, replacement2);
  return config
})

module.exports = withMainApplicationConfig
