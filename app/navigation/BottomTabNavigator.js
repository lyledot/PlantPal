import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/HomeScreen";

// importing the stackScreen for nested navigation
import { PlantStackScreen } from "./PlantStackScreen";
import { ToDoStackScreen } from "./ToDoStackScreen";

import colors from "../config/colors.js";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    // setting the initial route and colours for the bottom tab navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: colors.olivineLight,
      }}
    >
      <Tab.Screen
        name="Plants"
        component={PlantStackScreen}
        options={{
          tabBarLabel: "Plants",
          tabBarIcon: ({ color, size }) => (
            // using external icons
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="To Do"
        component={ToDoStackScreen}
        options={{
          tabBarLabel: "To Do",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="note" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { BottomTabNavigator };
