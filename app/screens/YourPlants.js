import React, { Button, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"

var minusFlag = true;

export default function YourPlants({ navigation }) {
  const [plants, setPlants] = useState([
    { name: "Calathea Ornata", key: "1" },
    { name: "Dracaena Trifasciata", key: "2" },
    { name: "Fittonia", key: "3" },
    { name: "Monstera Deliciosa", key: "4" },
    { name: "Oxalis Triangularis", key: "5" },
    { name: "Pilea Peperomioides", key: "6" },
    { name: "Pothos", key: "7" },
  ]);

  const [minus, setMinus] = useState('minus');
  const [btnColor, setColor] = useState(colors.dutchWhite);

  // when minus button is pressed, it changes the icon and colour
  const minusHandler = () => {
    if (minusFlag == true) {
      minusFlag = false;
      console.log("Minus is now set to false");
      setMinus('check');
      setColor(colors.burlywood);
    } else {
      console.log("Minus is now set to true");
      setMinus('minus');
      setColor(colors.dutchWhite);
      minusFlag = true;
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.header}>
        <Text style={s.title}>Your Plants</Text>
        <TouchableOpacity
        onPress={minusHandler}>
          <View style={[s.button, {backgroundColor: btnColor}]}>
            <MaterialCommunityIcons
              name={minus}
              color={"#fff"}
              size={25}
              style={{ textAlign: "center", top: 2.5 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Add a Plant")}>
          <View style={s.button}>
            <MaterialCommunityIcons
              name="plus"
              color={"#fff"}
              size={25}
              style={{ textAlign: "center", top: 2.5 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={s.button}>
            <MaterialCommunityIcons
              name="filter"
              color={"#fff"}
              size={20}
              style={{ textAlign: "center", top: 5 }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        style={s.container}
        data={plants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Plant Page", {
                name: item.name,
              })
            }
          >
            <Text style={s.item}> {item.name} </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}