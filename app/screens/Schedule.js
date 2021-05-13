import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  SectionList,
  TouchableOpacity,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"

export default function Schedule({ navigation }) {
  const schedData = [
    {
      title: "Monday",
      data: ["Plant 1", "Plant 2", "Plant 3"],
    },
    {
      title: "Tuesday",
      data: ["Plant 4", "Plant 5", "Plant 6"],
    },
    {
      title: "Wednesday",
      data: ["Plant 7", "Plant 8", "Plant 9"],
    },
    {
      title: "Thursday",
      data: ["Plant 10", "Plant 11", "Plant 12"],
    },
    {
      title: "Friday",
      data: ["Plant 13", "Plant 14", "Plant 15"],
    },
  ];

  const Item = ({ title }) => (
    <View>
      <Text style={s.item}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={[s.header, {flexDirection: "row"}]}>
        <Text style={s.title}>Watering Schedule</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Edit Sched")}>
        <View style={[s.button, {marginLeft: -25}]}>
          <MaterialCommunityIcons
            name="pencil"
            color={"#fff"}
            size={20}
            style={{ textAlign: "center", top: 4 }}
          />
        </View>
      </TouchableOpacity>
      </View>
      

      <SectionList
        sections={schedData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={[s.subTitle, { paddingBottom: 30 }]}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
}
