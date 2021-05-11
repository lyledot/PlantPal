import React, { Button, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";

import s from "../config/stylesheet";

export default function AddPlant({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[s.header]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={[s.button, {right: 100, marginStart: 210}]}>
            <MaterialCommunityIcons
              name={"check"}
              color={"#fff"}
              size={25}
              style={{ textAlign: "center", top: 2.5 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
