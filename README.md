# ThinMP_ReactNative

This app is a simple music player for Android and iOS.

## Demo

### Android

<img src="https://github.com/user-attachments/assets/ab8632ed-6bd7-4777-af71-78f489f892c4" width="156"> <img src="https://github.com/user-attachments/assets/32556894-b1a0-4509-a98b-98455ab253de" width="156"> <img src="https://github.com/user-attachments/assets/f98e8c1f-c7ee-4b5a-9652-22e9ee7af550" width="156"> <img src="https://github.com/user-attachments/assets/b926a58b-4c2a-4da0-8aa0-57083a0bf8a4" width="156"> <img src="https://github.com/user-attachments/assets/a6f354bb-b5ef-499c-8d47-e01341b2b87e" width="156">

### iOS

<img src="https://github.com/user-attachments/assets/6c4fd2db-4e2b-40d2-87d9-1ea857073560" width="156"> <img src="https://github.com/user-attachments/assets/51016272-0f36-4c9a-b10f-61d279e7ceb5" width="156"> <img src="https://github.com/user-attachments/assets/cf663f72-7a65-458c-94e0-544f1a39b03c" width="156"> <img src="https://github.com/user-attachments/assets/83a10711-78af-437d-9f87-c7d5c90bf3d8" width="156"> <img src="https://github.com/user-attachments/assets/ebdf2fcd-e19c-4a17-97a3-f31595f0c601" width="156">

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
- Expo v52
- Node v23
- TypeScript
- Zulu17
- fastlane

### Android

- Android Studio Koala | 2024.1.1
- Kotlin
- minSdkVersion 33
- targetSdkVersion 35
- Google Pixel 4a (Android Version 13)
- Google Pixel 7 Pro (Android Version 14)
- Google Pixel Tablet (Android Version 15)

### iOS

- Xcode 16.0
- Swift
- iOS Deployment Target 16
- iPhone 12 mini (iOS 16)
- iPhone 14 Plus (iOS 18)
- iPad Pro (6th generation, iPadOS 18, 12.9-inch)

## Libraries

- expo-sqlite - https://docs.expo.dev/versions/latest/sdk/sqlite/
- i18n-js - https://www.npmjs.com/package/i18n-js
- jotai - https://jotai.org/
- lodash - https://lodash.com/

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
