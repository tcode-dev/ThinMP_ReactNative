# ThinMP_ReactNative

This app is a simple music player for Android and iOS.

## Demo

### Android

#### Google Pixel 7 Pro

<img src="https://github.com/user-attachments/assets/1c9eb83a-85fe-4b70-a035-02d0aacd6d07" width="156"> <img src="https://github.com/user-attachments/assets/e61cef0f-b74d-4bd5-965f-1379c035b948" width="156"> <img src="https://github.com/user-attachments/assets/e0219a8d-2f40-4c5b-8047-09f26358a46d" width="156"> <img src="https://github.com/user-attachments/assets/f44dd40f-1a72-4c52-933d-953a17568148" width="156"> <img src="https://github.com/user-attachments/assets/3b290148-ab56-453a-b185-fc469895e706" width="156">

#### Google Pixel Tablet

<img src="https://github.com/user-attachments/assets/01aa1a14-8e70-4b3b-945a-858c70fb260e" width="200"> <img src="https://github.com/user-attachments/assets/a6196214-afc0-4dd5-9ea8-58ef436263b4" width="200"> <img src="https://github.com/user-attachments/assets/9a0611ea-ee7a-47d3-a346-4d180dc8aea0" width="200"> <img src="https://github.com/user-attachments/assets/54fae7b6-75de-4e45-bf08-3fd6147ffdfc" width="200">

### iOS

#### iPhone 14 Plus

<img src="https://github.com/user-attachments/assets/548e3ee0-2b21-459e-9b73-32bb7d7bb077" width="156"> <img src="https://github.com/user-attachments/assets/93fad434-34af-43b8-91dd-45a10236e66c" width="156"> <img src="https://github.com/user-attachments/assets/7a751f35-b0f3-4d09-befc-d14c51477c9f" width="156"> <img src="https://github.com/user-attachments/assets/6518ca28-b330-4df4-a754-42851fc5699b" width="156"> <img src="https://github.com/user-attachments/assets/34d2669d-8505-4e8b-9060-4a90bbc9748c" width="156">

#### iPad Pro

<img src="https://github.com/user-attachments/assets/3e2a3879-d2bd-4177-98c1-347f0aae5826" width="200"> <img src="https://github.com/user-attachments/assets/6ed62954-ec6f-4a21-aa0c-90c989f46908" width="200"> <img src="https://github.com/user-attachments/assets/a85e5fd7-5a8f-49fb-ba5b-f3f742a6287f" width="200"> <img src="https://github.com/user-attachments/assets/7fd0de9a-f1b1-4c80-9e05-ac99b1c09f52" width="200">

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
- Expo v53
- Node v24
- TypeScript
- Zulu17
- fastlane

### Android

- Android Studio | 2024.3.2 Patch 1
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
