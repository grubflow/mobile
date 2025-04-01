# GrubFlow

The official frontend for GrubFlow's Tender application. This application is built using Expo Go, React-Native, and Typescript.

### Prerequisites

- Node 23.10.0
- Expo Go
- CocoaPods

### Getting Started

- Clone the repository

```bash
git clone git@github.com:grubflow/mobile.git
cd mobile/
```

- Installing Node Modules:

```bash
npm i
```

- Installing CocoaPods

```bash
cd ios/
pod install
cd ..
```

### Starting The Application

- Obtain a `.env` file from a GrubFlow collaborator
- Move the `.env` file to the root directory
- Run the native app
- Connect your device via Expo Go

- iOS

```bash
npx expo run:ios
```

- Android

```bash
npx expo run:android
```

### Establishing Simulator Connections

- Install XCode and Android Studio's Latest Simulators (iPhone 16 and Google Pixel 8a respectively).

- Run the Local Metro on Expo Go:

```bash
npx expo start
```

#### Enter the following on the Local Metro on Expo Go

- iOS Simulator:
  `i`

- Android Simulator:
  `a`

<br></br>

- Ensure the [backend application](https://github.com/grubflow/backend) is running for the frontend to properly function.
