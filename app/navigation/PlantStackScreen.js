import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import YourPlants from "../screens/YourPlants";
import Schedule from "../screens/Schedule";
import PlantPage from "../screens/PlantPage";

const PlantStack = createStackNavigator();

const PlantStackScreen = () => {
  return (
    <PlantStack.Navigator>
      <PlantStack.Screen
        name="YourPlants"
        component={YourPlants}
        options={{
          headerShown: false,
        }}
      />
      <PlantStack.Screen
        name="PlantPage"
        component={PlantPage}
        options={({ route }) => ({ title: route.params.name })}
      />
    </PlantStack.Navigator>
  );
};

export { PlantStackScreen };
