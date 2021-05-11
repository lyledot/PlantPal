import React, { Button, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"

export default function Schedule({ navigation }) {
  const [plants, setPlants] = useState([
    { name: "Calathea Ornata", key: "1" },
    { name: "Dracaena Trifasciata", key: "2" },
    { name: "Fittonia", key: "3" },
    { name: "Monstera Deliciosa", key: "4" },
    { name: "Oxalis Triangularis", key: "5" },
    { name: "Pilea Peperomioides", key: "6" },
    { name: "Pothos", key: "7" },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.header}>
        <Text style={s.title}>Watering Schedule</Text>
      </View>

      <View>
        <Text style={s.subTitle}>Monday</Text>
      </View>

      <FlatList
        style={s.container}
        data={plants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => console.log( item.name + " has been pressed.") }
          >
            <Text style={s.item}> {item.name} </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}