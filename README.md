# ThinMP_ReactNative

This app is a simple music player for Android and iOS.

## Demo

### Android

<img src="https://github.com/user-attachments/assets/4afafd5f-ac23-48b5-a092-837ac5a33ef7" width="156"> <img src="https://github.com/user-attachments/assets/02f0a245-57b1-488d-aa31-c0aad83acc32" width="156"> <img src="https://github.com/user-attachments/assets/c65ca8f3-5018-4c40-ba71-e78ff4895256" width="156">

### iOS

<img src="https://github.com/user-attachments/assets/e1b88ffa-5749-4f52-99ea-f7b3f4101931" width="156"> <img src="https://github.com/user-attachments/assets/7c164932-f5f5-4dc2-83f2-bae9fdf4e15e" width="156"> <img src="https://github.com/user-attachments/assets/1946b0b5-8e7d-4e61-9dd5-f2c3acd29da3" width="156">

## Features

- device music play
- background play
- favorite artists
- favorite songs
- playlists
- shortcuts

## Environments

### host

- React Native
- Expo v51
- Node v23
- TypeScript
- Zulu17

### Android

- Android Studio Koala | 2024.1.1
- Kotlin
- minSdkVersion 33
- targetSdkVersion 34
- Google Pixel 4a (Android Version 13)
- Google Pixel 7 Pro (Android Version 14)

### iOS

- Xcode 16.0
- Swift
- iOS Deployment Target 16
- iPhone 12 mini (iOS 16)
- iPhone 14 Plus (iOS 18)
- iPad Pro (6th generation, iPadOS 18, 12.9-inch)

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
eas build --platform android --local
eas build --platform ios --local
eas build --platform android --profile preview
eas build --platform ios --profile preview
```
