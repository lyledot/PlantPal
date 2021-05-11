import React from "react";
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from "react-native";

import colors from "../config/colors.js";
import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"

export default function PlantPage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView> */}
      <View style={styles.photo} />
      <View style={styles.descBox}>
        <Text style={styles.descText}>
          The Calathea Ornata (also called the Calathea Pinstripe or Pinstripe
          plant) is a beautiful plant with pink stripes on its large green
          leaves. It's beautiful, but it can be a fussy plant and difficult to
          care for at times.
        </Text>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  photo: {
    backgroundColor: colors.dutchWhite,
    flex: 0.5,
    borderRadius: 30, // rounded corners
    overflow: "hidden",
    margin: 20,
  },
  descBox: {
    backgroundColor: colors.grey,
    flex: 0.5,
    borderRadius: 30, // rounded corners
    overflow: "hidden",
    marginHorizontal: 20,
  },
  descText: {
    fontFamily: "RobotoItalic",
    fontSize: 15,
    borderRadius: 15, // rounded corners
    overflow: "hidden",
    backgroundColor: colors.grey,
    padding: 25,
  },
});
