import React, { Button, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import colors from "../config/colors.js";

function YourPlants({ navigation }) {
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
      <View style={styles.header}>
        <Text style={styles.title}>Your Plants</Text>
      </View>

      <FlatList
        style={styles.container}
        data={plants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => console.log( item.name + " has been pressed.") }
          >
            <Text style={styles.item}> {item.name} </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 20,
  },
  title: {
    fontFamily: "PoetsenOne",
    fontSize: 30,
    left: 20,
  },
  date: {
    fontFamily: "PoetsenOne",
    flex: 1,
    textAlign: "right",
    right: 20,
    top: 15,
  },
  subTitle: {
    fontFamily: "PoetsenOne",
    fontSize: 20,
    top: 20,
    left: 20,
    marginTop: 20,
  },
  container: {
    marginTop: 20,
    paddingTop: 10,
    flex: 1,
  },
  item: {
    fontFamily: "RobotoBold",
    fontSize: 20,
    height: 100,
    borderRadius: 15, // rounded corners
    overflow: "hidden",
    marginBottom: 15,
    marginHorizontal: 20,
    backgroundColor: colors.grey,
    paddingTop: 55,
    paddingLeft: 15,
  },
});

export default YourPlants;
