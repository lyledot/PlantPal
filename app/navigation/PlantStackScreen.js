import React from "react";
import {
  createStackNavigator,
} from "@react-navigation/stack";

import PlantDB from "../screens/PlantDB";
import PlantPage from "../screens/PlantPage";

const PlantStack = createStackNavigator();

const PlantStackScreen = () => {
  return (
    <PlantStack.Navigator initialRouteName="Plant DB" headerStyle>
      <PlantStack.Screen
        name="Plant DB"
        component={PlantDB}
        options={{ headerShown: false, headerTitle: " " }}
      />
      <PlantStack.Screen
        name="Plant Page"
        component={PlantPage}
        options={({ route }) => ({ title: route.params.name })}
      />
    </PlantStack.Navigator>
  );
};

export { PlantStackScreen };
