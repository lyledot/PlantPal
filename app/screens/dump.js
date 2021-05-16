import React from "react";
import { View, Text, Button } from "react-native";

function Schedule({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Schedule page</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Schedule;

<PlantStack.Screen
  name="Your Plants"
  component={YourPlants}
  options={
    (({ route }) => ({ title: route.params.name }), { headerShown: false })
  }
/>;


export default function AddPlant({ navigation }) {
  const optionList = [
    "Cancel",
    "==Manual Entry==",
    "Calathea Ornata",
    "Dracaena Trifasciata",
    "Fittonia",
    "Monstera Deliciosa",
    "Oxalis Triangularis",
    "Pilea Peperomioides",
    "Pothos",
    "Echiveria Succulent",
  ];

  const handlePress = (buttonIndex) => {
    this.setState({
      selected: buttonIndex,
      Region: options[buttonIndex],
    });
  };

  <ActionSheet
    ref={(o) => (ActionSheet = o)}
    options={optionList}
    cancelButtonIndex={0}
    selectedValue={state.Region}
    value={state.Region}
    onPress={handlePress}
  />;




import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"

export default function HomeScreen({ navigation }) {
  const [row, setRow] = useState(s.itemRed);
  const [plants, setPlants] = useState([
    { name: "Pilea Peperomioides", key: "1" },
    { name: "Dracaena Trifasciata", key: "2" },
    { name: "Fittonia", key: "3" },
    { name: "Pothos", key: "4" },
  ]);

  var checkedFlag = false;

  // when minus button is pressed, it changes the icon and colour
  const minusHandler = () => {
    if (checkedFlag == false) {
      setRow(s.item);
      checkedFlag = true;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.header}>
        <Text style={s.title}>Summary</Text>
      </View>

      <View>
        <Text style={s.subTitle}>Water me!</Text>
      </View>

      <FlatList
        style={s.container}
        data={plants}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={itemHandler}>
            <Text style={row}> {item.name} </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
        }




        import React, { useState, Component } from "react";
import { render } from "react-dom";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"
import data from "../database/plants.json";

export default class HomeScreen extends Component({ navigation }) {
  constructor() {
    super();
    this.state = { data };
  }

  render() {
    const [row, setRow] = useState(s.itemRed);

    const [plants, setPlants] = useState([
      { name: "Pilea Peperomioides", key: "1" },
      { name: "Dracaena Trifasciata", key: "2" },
      { name: "Fittonia", key: "3" },
      { name: "Pothos", key: "4" },
    ]);

    var checkedFlag = false;

    // when minus button is pressed, it changes the icon and colour
    const itemHandler = () => {
      if (checkedFlag == false) {
        setRow(s.item);
        checkedFlag = true;
      }
    };

    return (
      <SafeAreaView style={{ flex: 1 }}>
        {data.map((post) => {
          return (
            <View key={post.id}>
              <Text>{post.name}</Text>
            </View>
          );
        })}
        <View style={s.header}>
          <Text style={s.title}>Summary!</Text>
        </View>

        <View>
          <Text style={s.subTitle}>Water me!</Text>
        </View>

        <FlatList
          style={s.container}
          data={plants}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={itemHandler}>
              <Text style={row}> {item.name} </Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
  }
}
