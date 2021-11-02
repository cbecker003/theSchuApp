// import React from 'react';

// import {View, StyleSheet, Text, Button} from 'react-native';

// export default function CustomerMenuScreen({navigation}){
//     return(
//       <Text>This is the customer Page</Text>
//     );
//   };

// const styles = StyleSheet.create({
//   title: {
//     marginBottom: 48,
//   },
//   input: {
//     marginVertical: 8,
//   },
//   loginButton: {
//     marginVertical: 32,
//   },

// });

import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { Tab, Text, TabView } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Home, Menu, ReviewDetails, ViewOrder } from "../screen";
import { COLORS, icons } from "../../constants";
import { NavigationContainer } from "@react-navigation/native";

// create/display what each tab/icon is/do
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

// this is the navigator bar at the bottom
const CustomerMenuScreen = () => {

  return (
    
    <BottomTab.Navigator
      screenOptions={{
        showLabel: false,
        style: {
          boarderTopWidth: 0,
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
        <BottomTab.Screen
          name="The Schu"
          component={Menu}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.cutlery}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }} />
            ),
          }} />

        <BottomTab.Screen
          name="Cart"
          component={ReviewDetails}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.cutlery}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }} />
            ),
          }} />
      </BottomTab.Navigator>
  );
};

export default CustomerMenuScreen;
