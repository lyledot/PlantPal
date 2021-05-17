import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"
import factData from "../database/facts.json";
// importing external database under variable name "toWaterData"

export default function HomeScreen({ navigation }) {
  const [fact, setFact] = useState("Press the button to generate a fact!");

  var checkedFlag = false;

  // when minus button is pressed, it changes the icon and colour
  const itemHandler = () => {
    if (checkedFlag == false) {
      setRow(s.item);
      checkedFlag = true;
    }
  };

  const randomGen = () => {
    const fact = factData[Math.floor(Math.random() * factData.length)];
    setFact(fact.text);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.header}>
        <Text style={s.title}>Houseplant Fact</Text>
      </View>
      <Text style={s.factSpace}>{fact}</Text>

      <TouchableOpacity onPress={randomGen}>
        <View style={s.factButton}>
          <MaterialCommunityIcons
            name="refresh"
            color={"#fff"}
            size={20}
            style={{ textAlign: "center", top: 5 }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
