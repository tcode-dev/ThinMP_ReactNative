# ThinMP_ReactNative
This app is a simple music player for Android and iOS.

## Features

* device music play
* background play
* favorite artists
* favorite songs
* playlists
* shortcuts

## Environments

### React Native

* React Native
* Expo v51
* Node v23
* TypeScript

### Android

* Android Studio Koala | 2024.1.1
* Kotlin
* minSdkVersion 33
* targetSdkVersion 34
* Google Pixel 4a (Android Version 13)
* Google Pixel 7 Pro (Android Version 14)

### iOS

* Xcode 16.0
* Swift
* iOS Deployment Target 16
* iPhone 12 mini (iOS 16)
* iPhone 14 Plus (iOS 18)
* iPad Pro (6th generation, iPadOS 18, 12.9-inch)

## Command

### install

```
npm install -g expo @expo/ngrok eas-cli
npm install
```

### native module build

```
cd packages/audio
npm run build
```

### local build

```
npm run android
npm run ios
```

### eas build

```
eas build --platform android --profile preview
eas build --platform ios --profile preview
```
