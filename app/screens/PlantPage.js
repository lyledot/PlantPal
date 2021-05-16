import React from "react";
import { SafeAreaView, View, Text, ScrollView, Image } from "react-native";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"

export default function PlantPage({ route, navigation }) {
  const { description } = route.params;
  const { image } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <Image source={{uri: (image)}}
       style={s.photo} />
        <View style={s.descBox}>
          <Text style={s.descText}>
            {JSON.stringify(description).replace(/\"/g, "").replace("\\n", "\n")}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
