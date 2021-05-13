import React, { Button, useState } from "react";
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

export default function AddPlant({ navigation }) {
  const [plantChoice, setPlantChoice] = useState("Select");

  const optionList = [
    "Cancel",
    "==Manual Entry==",
    "Calathea Ornata",
    "Dracaena Trifasciata",
    "Fittonia",
    "Monstera Deliciosa",
    "Oxalis Triangularis",
    "Pilea Peperomioides",
    "Pothos",
    "Echiveria Succulent",
  ];

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          "Cancel",
          "==Manual Entry==",
          "Calathea Ornata",
          "Dracaena Trifasciata",
          "Fittonia",
          "Monstera Deliciosa",
          "Oxalis Triangularis",
          "Pilea Peperomioides",
          "Pothos",
          "Echiveria Succulent",
        ],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
          setPlantChoice(optionList[buttonIndex]);
      }
    );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[s.header]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={[s.button, { right: 100, marginStart: 235 }]}>
            <MaterialCommunityIcons
              name={"check"}
              color={"#fff"}
              size={25}
              style={{ textAlign: "center", top: 2.5 }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={[s.subTitle, { top: -10 }]}>Choose from below</Text>
      </View>

      <View style={s.rowPH}>
        <TouchableOpacity onPress={onPress}>
          <Text style={[s.body, {marginVertical: 13}]}>{plantChoice}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={[s.subTitle, { top: -10 }]}>Manual entry</Text>
      </View>
      <Text style={s.body}>Name</Text>
      <TextInput
        style={s.input}
        placeholder="e.g. Syngonium White butterfly"
        //onChangeText={() => SomeFunction()}
      />
      <Text style={[s.body, { paddingTop: 10 }]}>Description</Text>
      <TextInput
        style={s.input}
        placeholder="e.g. With arrow-shaped leaves and beautiful white foliage "
      />
      <Text style={[s.body, { paddingTop: 10 }]}>Light conditions</Text>
      <TextInput
        style={s.input}
        placeholder="e.g. Indirect light, north facing window"
      />
      <Text style={[s.body, { paddingTop: 10 }]}>Temperature</Text>
      <TextInput style={s.input} placeholder="e.g. 18-24°C" />
      <Text style={[s.body, { paddingTop: 10 }]}>Watering schedule</Text>
      <TextInput
        style={s.input}
        placeholder="e.g. Water well and allow the soil to be 50% dry before"
      />
      <Text style={[s.body, { paddingTop: 10 }]}>Care tips</Text>
      <TextInput
        style={s.input}
        placeholder="e.g. Aim for a warm and humid setting, mist often."
      />
    </SafeAreaView>
  );
}
