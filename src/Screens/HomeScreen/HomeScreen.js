import { StatusBar } from "expo-status-bar"; 
import React, {useState} from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { Header } from 'react-native-elements';
const { width, height } = Dimensions.get("window");



const HomeScreen = () => {
    
    return (
        <View >
            <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
    }
})

export default HomeScreen
