import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// importing screens
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
        // making sure the header isn't shown
        // header title is also set to an empty string to remove the title 
        // from the back button on the next page 
      />
      <PlantStack.Screen
        name="Plant Page"
        component={PlantPage}
        options={({ route }) => ({ title: route.params.name })}
        // the above line makes sure that the header is set to the name of the plant chosen
      />
    </PlantStack.Navigator>
  );
};

export { PlantStackScreen };
