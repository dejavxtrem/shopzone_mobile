import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Text} from "react-native";
import MyStack from "./src/config/Navigation";
import * as Font from "expo-font";
import Header from './src/Components/Header/Header'
import SearchBar from './src/Components/SearchBar/SearchBar'
import ProductListScreen from './src/Screens/ProductList/ProductList'
import { SafeAreaProvider } from 'react-native-safe-area-context'


import AppLoading from 'expo-app-loading'
 
const FetchFont = () => {
  return Font.loadAsync({
    NunitoSans_Regular: require("./src/Fonts/NunitoSans-Regular.ttf"),
    NunitoSans_Bold: require("./src/Fonts/NunitoSans-Bold.ttf")

  })
}
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);


  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={FetchFont}
        onError={() => console.log("ERROR")}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }



  return (
    <SafeAreaProvider>
        <MyStack />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
 
});
 