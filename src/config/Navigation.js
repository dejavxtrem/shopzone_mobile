import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from '@expo/vector-icons';

import {
    WelcomeView
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
            </Stack.Navigator>
            </NavigationContainer>
    )
}

export default MyStack;