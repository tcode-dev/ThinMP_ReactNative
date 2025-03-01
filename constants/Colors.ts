/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export const Colors = {
  light: {
    background: '#fff',
    onBackground: '#f2f2f7',
    overlay: '#ffffff40',
    border: '#ccc',
    icon: '#151718',
    text: '#11181C',
    tint: '#666',
    seekBar: {
      android: {
        thumbTint: '#666',
        minimumTrackTint: '#666',
        maximumTrackTint: '#1c1c1e'
      },
      ios: {
        thumbTint: '#666',
        minimumTrackTint: '#666',
        maximumTrackTint: '#f2f2f7'
      }
    }
  },
  dark: {
    background: '#151718',
    onBackground: '#1c1c1e',
    overlay: '#15171840',
    border: '#666',
    icon: '#fff',
    text: '#ECEDEE',
    tint: '#fff',
    seekBar: {
      android: {
        thumbTint: '#fff',
        minimumTrackTint: '#fff',
        maximumTrackTint: '#f2f2f7'
      },
      ios: {
        thumbTint: '#fff',
        minimumTrackTint: '#fff',
        maximumTrackTint: '#1c1c1e'
      }
    }
  },
};
