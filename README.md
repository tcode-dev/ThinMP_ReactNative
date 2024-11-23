# ThinMP_ReactNative

This app is a simple music player for Android and iOS.

## Demo

### Android

<img src="https://github.com/user-attachments/assets/97194000-2950-47fc-8742-221ecfc9ac73" width="156"> <img src="https://github.com/user-attachments/assets/e6c74d43-6e7e-45a7-a262-7eb3e1d9e19f" width="156"> <img src="https://github.com/user-attachments/assets/80aac404-264d-4585-b09a-ab07828d30ca" width="156"> <img src="https://github.com/user-attachments/assets/e5d86e9d-3a90-47bb-a18d-0df85eee6074" width="156">

### iOS

<img src="https://github.com/user-attachments/assets/88f7ece4-364a-4a52-a0ca-91c7606dfc47" width="156"> <img src="https://github.com/user-attachments/assets/3d5e5567-95c4-457a-8dbf-cb3c1de9f32b" width="156"> <img src="https://github.com/user-attachments/assets/1be9e747-b450-4adf-bd7b-d4381e6b040b" width="156"> <img src="https://github.com/user-attachments/assets/ec509f03-b5ec-4929-89e3-5c80b48e7441" width="156">

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
