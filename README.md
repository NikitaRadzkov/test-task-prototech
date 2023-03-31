# React Native with Expo App
This is a React Native app built with Expo, which provides a set of tools and services for developing and publishing React Native applications.

## Folder Structure
The app folder is structured as follows:
```
  app/
    |- assets/
    |- components/
    |- config/
    |- context/
    |- navigation/
    |- screens/
    |- types/
```
* assets/: This folder contains all the static assets of the app such as images, fonts, etc.

* components/: This folder contains all the reusable UI components of the app.

* config/: This folder contains all the configuration files for the app, including environment variables, theme, etc.

* context/: This folder contains all the context providers of the app, which are used for global state management.

* navigation/: This folder contains all the navigation configuration and screens of the app.

* screens/: This folder contains all the app screens or pages.

* types/: This folder contains all the TypeScript definitions and interfaces used in the app.

## Installation
To install the app, you need to have Node.js and Expo CLI installed on your machine. Then, follow the steps below:

1. Clone the repo: git clone https://github.com/NikitaRadzkov/test-task-prototech.git
2. Navigate to the app folder: cd test-task-prototech
3. Install dependencies: npm install or yarn install

## Running the App
To run the app, you need to start the development server using the following command:
```
  npm start
```
or
```
  yarn start
```
This will open the Expo DevTools in your default browser. From there, you can run the app on an emulator or physical device.

## Building the App
To build the app for production, you can use the following command:
```
  expo build:android -t apk
```
or
```
  expo build:ios -t archive
```

This will create an APK or IPA file that you can submit to the Google Play Store or App Store, respectively.
