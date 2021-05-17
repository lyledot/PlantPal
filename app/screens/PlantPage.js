import React from "react";
import { SafeAreaView, View, Text, ScrollView, Image } from "react-native";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"

export default function PlantPage({ route, navigation }) {
  const { desc } = route.params;
  const { image } = route.params;
  const { light } = route.params;
  const { temp } = route.params;
  const { sched } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Image source={{ uri: image }} style={s.photo} />
        <View style={s.descBox}>
          <Text style={s.descHeading}>Description</Text>
          <Text style={s.descText}>
            {JSON.stringify(desc)
              .replace(/\"/g, "")
              .replace("\\n", "\n")}
          </Text>
          <Text style={s.descHeading}>Light Conditions</Text>
          <Text style={s.descText}>
            {JSON.stringify(light)
              .replace(/\"/g, "")
              .replace("\\n", "\n")}
          </Text>
          <Text style={s.descHeading}>Temperature</Text>
          <Text style={s.descText}>
            {JSON.stringify(temp)
              .replace(/\"/g, "")
              .replace("\\n", "\n")}
          </Text>
          <Text style={s.descHeading}>Watering Schedule</Text>
          <Text style={s.descText}>
            {JSON.stringify(sched)
              .replace(/\"/g, "")
              .replace("\\n", "\n")}
          </Text>
          <Text style={s.descHeading}></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
