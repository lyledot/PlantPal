import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/HomeScreen";
import Schedule from "../screens/Schedule";

import { PlantStackScreen } from "./PlantStackScreen";
import { SchedStackScreen } from "./SchedStackScreen";

import colors from "../config/colors.js";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
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
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="format-list-bulleted"
            color={color}
            size={size}
          />
        ),
      }}/>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen 
      name="Schedule" 
      component={SchedStackScreen} 
      options={{
        tabBarLabel: "Schedule",
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="calendar"
            color={color}
            size={size}
          />
        ),
      }}/>
    </Tab.Navigator>
  );
};

export { BottomTabNavigator };
