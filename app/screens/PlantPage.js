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
  // importing the given parameters from the plantDB page.
  // these are all supplied by the JSON array

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* inserting a photo of the plant itself. */}
        <Image source={{ uri: image }} style={s.photo} />
        <View style={s.descBox}>
          {/* Supplementary information about the plant 
          all taken from the page before */}
          <Text style={s.descHeading}>Description</Text>
          <Text style={s.descText}>
            {/* Removes the double quotes that come with the JSON.stringify command */}
            {JSON.stringify(desc)
              .replace(/\"/g, "")}
          </Text>
          <Text style={s.descHeading}>Light Conditions</Text>
          <Text style={s.descText}>
            {JSON.stringify(light)
              .replace(/\"/g, "")}
          </Text>
          <Text style={s.descHeading}>Temperature</Text>
          <Text style={s.descText}>
            {JSON.stringify(temp)
              .replace(/\"/g, "")}
          </Text>
          <Text style={s.descHeading}>Watering Schedule</Text>
          <Text style={s.descText}>
            {JSON.stringify(sched)
              .replace(/\"/g, "")}
          </Text>
          <Text style={s.descHeading}></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
