import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// importing external icons for use in buttons
import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"
import factData from "../database/facts.json";
// importing external database under variable name "toWaterData"

export default function HomeScreen({ navigation }) {
  const [fact, setFact] = useState("Press the button to generate a fact!");
  // useState updates the fact whenever the user presses the button

  const randomGen = () => {
    const fact = factData[Math.floor(Math.random() * factData.length)];
    setFact(fact.text);
  };
  // generates a random number and uses that to retrieve a fact from the external
  // JSON file "facts.json" for display.

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.header}>
        <Text style={s.title}>Houseplant Fact</Text>
      </View>
      <Text style={s.factSpace}>{fact}</Text>

      {/* A button for generating a new, random fact. */}
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
