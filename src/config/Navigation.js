import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';

import {
    WelcomeView,
    LandingScreen,
    LoginScreen,
    SignUp,
    HomeScreen,
    CheckOutScreen,
    OrderScreen
} from "./../Screens/index"





const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


function userTabs() {
    return (
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: "rergb(132,37,174)d",
            style: {
              paddingBottom: 20,
              height: 75,
            },
          }}
        >
               <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Entypo
                name="home"
                size={20}
                color={focused ? "rgb(132,37,174)" : "rgb(142,142,147)"}
              />
            );
          },
        }}
      />


        <Tab.Screen
        name="Cart"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Entypo
                name="shopping-cart"
                size={20}
                color={focused ? "rgb(132,37,174)" : "rgb(142,142,147)"}
              />
            );
          },
        }}
      />
      
      <Tab.Screen
        name="CheckOut"
        component={CheckOutScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
                <MaterialIcons name="payment"
                 size={24} 
                 color={focused ? "rgb(132,37,174)" : "rgb(142,142,147)"} 
                 />
            );
          },
        }}
      />

        </Tab.Navigator>
    )
}


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
                <Stack.Screen  name="user" component={userTabs}/>
            </Stack.Navigator>
            </NavigationContainer>
    )
}

export default MyStack;