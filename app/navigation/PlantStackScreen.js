import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";

import YourPlants from "../screens/YourPlants";
import PlantPage from "../screens/PlantPage";
import AddPlant from "../screens/AddPlant";

const PlantStack = createStackNavigator();

const PlantStackScreen = () => {
  return (
    <PlantStack.Navigator 
    initialRouteName="Your Plants"
    headerStyle>
      <PlantStack.Screen
        name="Your Plants"
        component={YourPlants}
        options={{ headerShown: false, headerTitle:"Plants"}}
      />
      <PlantStack.Screen
        name="Plant Page"
        component={PlantPage}
        options={({ route }) => ({ title: route.params.name }), { headerBackTitleVisible: false}}
      />
      <PlantStack.Screen
        name="Add a Plant"
        component={AddPlant}
      />
    </PlantStack.Navigator>
  );
};

export { PlantStackScreen };
