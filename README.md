# Rick and Morty App

Rick and Morty App is an application developed with React Native using Expo. The app consumes the Rick and Morty API to list the characters with some information.

## 📱 App Preview
<div align="center" >
  <img src="rick-and-morty-app-preview.gif">
</div>

## 🛸 Overview

### Character Rendering

In order to maintain application performance, the listing takes advantage of the API's pagination feature, which renders the characters as the user scrolls down the list.

### Character Search

The search is done through existing filters in the API and to avoid unnecessary requests, a debounce was used to search only after 300 milliseconds that the user stops typing.

### UI Design

The App's UI is available at the link of this Figma project

[![Figma Badge](https://img.shields.io/badge/-Figma%20Project-3442E8?style=flat-square&logo=Figma&logoColor=F0EFEB&link=https://www.linkedin.com/in/matheuspleal/)](https://www.figma.com/file/wvW2pHwbKNbSSuHHPNSXBL/Rick-and-Morty-App?node-id=0%3A1&t=jB8ACkFYUEtchcCM-1)

### Rick and Morty API

In addition to using the API as a data source for character rendering, the entire design of the app was based on the UI of the API documentation site.

👉🏻 [Rick and Morty API](https://rickandmortyapi.com/) 👈🏻

## ⚙️ Setup

**This project requires expo-cli installed**

### Steps

* Clone the project repository
```
git clone https://github.com/matheuspleal5/rick-and-morty-app.git
```

* Install all dependencies
```
yarn
```

* Start application
```
expo start
```

* Enjoy the app! 

## 👨🏻‍💻 Techs, Tools and Libs

* [React Native](https://reactnative.dev/) 
* [Expo](https://expo.dev/)
* [Styled Components](https://styled-components.com/)
* [React Native SVG](https://www.npmjs.com/package/react-native-svg) 
* [React Native iPhone X Helper](https://www.npmjs.com/package/react-native-iphone-x-helper)
* [React Native Responsive Fontsize](https://www.npmjs.com/package/react-native-responsive-fontsize) 
* [Lodash](https://lodash.com/)

## 📄 License
MIT License © [Matheus Leal](https://github.com/matheuspleal5)











