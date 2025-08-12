import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
      <Tab.Navigator>
        {/* <Tab.Screen name="Home" component={Home} /> */}
        {/* <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
  );
}
