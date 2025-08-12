import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import Explore from "../screens/Explore";
import Cart from "../screens/Cart";
import Favorite from "../screens/Favorite";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#53B175",
          title: "Shop",
        }}
        component={Home}
      />
      <Tab.Screen
        name="Explore"
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#53B175",
          title: "Explore",
        }}
        component={Explore}
      />
      <Tab.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#53B175",
          title: "Cart",
        }}
        component={Cart}
      />
      <Tab.Screen
        name="Favorite"
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#53B175",
          title: "Favorite",
        }}
        component={Favorite}
      />
      <Tab.Screen
        name="Account"
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#53B175",
          title: "Account",
        }}
        component={Account}
      />
    </Tab.Navigator>
  );
}
