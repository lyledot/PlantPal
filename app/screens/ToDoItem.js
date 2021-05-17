import React from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"

export default function ToDoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={s.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}
