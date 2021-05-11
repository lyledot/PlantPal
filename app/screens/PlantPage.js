import React, { Button, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"

export default function PlantPage({ navigation }) {
  const [plants, setPlants] = useState([
    { name: "Calathea Ornata", key: "1" },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.header}>
        <Text style={s.title}>Plant?</Text>
      </View>

      <FlatList
        style={s.container}
        data={plants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => console.log(item.name + " has been pressed.")}
          >
            <Text style={s.item}> {item.name} </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
