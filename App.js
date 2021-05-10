import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as Font from "expo-font";

import HomeScreen from "./app/screens/HomeScreen";
import ProfileScreen from "./app/screens/ProfileScreen";

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    await Font.loadAsync({
      PoetsenOne: require("./app/assets/fonts/PoetsenOne-Regular.ttf"),
      RobotoRegular: require("./app/assets/fonts/Roboto-Regular.ttf"),
      RobotoLight: require("./app/assets/fonts/Roboto-Light.ttf"),
      RobotoItalic: require("./app/assets/fonts/Roboto-Italic.ttf"),
      RobotoBold: require("./app/assets/fonts/Roboto-Bold.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    // Use the font with the fontFamily property after loading
    if (this.state.fontsLoaded) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "", //empty title
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={({ route }) => ({ title: route.params.name })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return null;
    }
  }
}