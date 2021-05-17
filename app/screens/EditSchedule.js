import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActionSheetIOS,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import s from "../config/stylesheet";

export default function EditSchedule({ navigation }) {
  const [dayChoice, setDayChoice] = useState("Not Set");

  const dayList = [
    "No Set Day",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          "No Set Day",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        setDayChoice(dayList[buttonIndex]);
      }
    );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.schedRow}>
        <Text style={s.schedPlant}>Dracaena Trifasciata</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={s.schedDay}>{dayChoice}</Text>
        </TouchableOpacity>
      </View>

      <View style={s.schedRow}>
        <Text style={s.schedPlant}>Echiveria Succulent</Text>
        <Text style={s.schedDay}>Tuesday</Text>
      </View>

      <View style={s.schedRow}>
        <Text style={s.schedPlant}>Fittonia</Text>
        <Text style={s.schedDay}>Monday</Text>
      </View>

      <View style={s.schedRow}>
        <Text style={s.schedPlant}>Monstera Deliciosa</Text>
        <Text style={s.schedDay}>Sunday</Text>
      </View>

      <View style={s.schedRow}>
        <Text style={s.schedPlant}>Oxalis Triangularis</Text>
        <Text style={s.schedDay}>Wednesday</Text>
      </View>

      <View style={s.schedRow}>
        <Text style={s.schedPlant}>Pilea Peperomioides</Text>
        <Text style={s.schedDay}>Monday</Text>
      </View>

      <View style={s.schedRow}>
        <Text style={s.schedPlant}>Pothos</Text>
        <Text style={s.schedDay}>Monday</Text>
      </View>
    </SafeAreaView>
  );
}
