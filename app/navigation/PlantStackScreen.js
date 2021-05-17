import React from "react";
import { StyleSheet } from "react-native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";

import YourPlants from "../screens/YourPlants";
import PlantPage from "../screens/PlantPage";
import AddPlant from "../screens/AddPlant";

const PlantStack = createStackNavigator();

const PlantStackScreen = () => {
  return (
    <PlantStack.Navigator initialRouteName="Your Plants" headerStyle>
      <PlantStack.Screen
        name="Your Plants"
        component={YourPlants}
        options={{ headerShown: false, headerTitle: " " }}
      />
      <PlantStack.Screen
        name="Plant Page"
        component={PlantPage}
        options={({ route }) => ({ title: route.params.name })}
      />
      <PlantStack.Screen
        name="Add a Plant"
        component={AddPlant}
        options={{ headerBackTitleVisible: false }}
      />
    </PlantStack.Navigator>
  );
};

export { PlantStackScreen };
