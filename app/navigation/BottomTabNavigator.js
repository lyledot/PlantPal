import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../screens/HomeScreen";
import YourPlants from "../screens/YourPlants";
import Schedule from "../screens/Schedule";

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
      component={YourPlants} 
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
      component={Schedule} 
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
