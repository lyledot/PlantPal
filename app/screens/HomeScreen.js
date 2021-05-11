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
  const [plants, setPlants] = useState([
    { name: "Pilea Peperomioides", key: "1" },
    { name: "Dracaena Trifasciata", key: "2" },
    { name: "Fittonia", key: "3" },
    { name: "Pothos", key: "4" },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.header}>
        <Text style={s.title}>Summary</Text>
        <Text style={s.date}>Monday 8th February</Text>
      </View>

      <View>
        <Text style={s.subTitle}>Water me!</Text>
      </View>

      <FlatList
        style={s.container}
        data={plants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("YourPlants", {
                name: item.name,
              })
            }
          >
            <Text style={s.item}> {item.name} </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}