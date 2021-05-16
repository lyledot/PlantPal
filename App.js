import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import * as Font from "expo-font";

import { BottomTabNavigator } from "./app/navigation/BottomTabNavigator";

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
          <BottomTabNavigator />
          <StatusBar style="auto" />
        </NavigationContainer>
      );
    } else {
      return null;
    }
  }
}
