import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from '@expo/vector-icons';

import {
    WelcomeView,
    LandingScreen,
    LoginScreen,
    SignUp,
    HomeScreen
} from "./../Screens/index"




const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                 screenOptions={{
                    headerShown: false,
                  }}
                  initialRouteName="WelcomeView"
            >
                <Stack.Screen  name="WelcomeView" component={WelcomeView}/>
                <Stack.Screen  name="LandingScreen" component={LandingScreen}/>
                <Stack.Screen  name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen  name="SignUp" component={SignUp}/>
                <Stack.Screen  name="HomeScreen" component={HomeScreen}/>
            </Stack.Navigator>
            </NavigationContainer>
    )
}

export default MyStack;