import React from "react";
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from "react-native";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"

export default function PlantPage({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={s.photo} />
        <View style={s.descBox}>
          <Text style={s.descText}>
            The Calathea Ornata (also called the Calathea Pinstripe or Pinstripe
            plant) is a beautiful plant with pink stripes on its large green
            leaves. It's beautiful, but it can be a fussy plant and difficult to
            care for at times.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
