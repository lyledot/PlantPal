import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"
import toWaterData from "../database/toWater.json";
// importing external database under variable name "toWaterData"

export default function HomeScreen({ navigation }) {
  const [row, setRow] = useState(s.itemRed);

  var checkedFlag = false;

  // when minus button is pressed, it changes the icon and colour
  const itemHandler = () => {
    if (checkedFlag == false) {
      setRow(s.item);
      checkedFlag = true;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.header}>
        <Text style={s.title}>Summary</Text>
      </View>

      <View>
        <Text style={s.subTitle}>Water me!</Text>
      </View>
      <ScrollView style={s.container}>
        {toWaterData.map((post) => {
          return (
            <View key={post.id}>
              <TouchableOpacity onPress={itemHandler}>
                <Text style={row}>{post.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
