import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Font from "expo-font";

import { MainStackNavigator } from "./app/navigation/MainStackNavigator";
import { BottomTabNavigator } from "./app/navigation/BottomTabNavigator";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
          <BottomTabNavigator/>
        </NavigationContainer>
      );
    } else {
      return null;
    }
  }
}