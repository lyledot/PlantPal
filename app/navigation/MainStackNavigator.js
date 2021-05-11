import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import YourPlants from "../screens/YourPlants";
import Schedule from "../screens/Schedule";
import PlantPage from "../screens/PlantPage";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="YourPlants"
        component={YourPlants}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

const PlantStack = createStackNavigator();

const PlantStackScreen = () => {
  return (
    <PlantStack.Navigator>
      <PlantStack.Screen name="PlantPage" component={PlantPage} />
    </PlantStack.Navigator>
  );
}