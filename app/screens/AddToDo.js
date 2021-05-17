import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function AddToDo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={s.toDoRow}
        placeholder="New To Do..."
        onChangeText={changeHandler}
      />

      <TouchableOpacity onPress={() => submitHandler(text)}>
        <View style={s.toDoButton}>
          <MaterialCommunityIcons
            name="plus"
            color={"#fff"}
            size={20}
            style={{ textAlign: "center", top: 5 }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
