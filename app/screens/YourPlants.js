import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActionSheetIOS,
  ScrollView,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"
import yourPlantsData from "../database/yourPlants.json";
// importing external database under variable name "yourPlantsData"

var minusFlag = true;

export default function YourPlants({ navigation }) {
  const filterList = [
    "Cancel",
    "Alphabetical (A-Z)",
    "Alphabetical (Z-A)",
    "Recently added",
  ];

  const filterPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          "Cancel",
          "Alphabetical (A-Z)",
          "Alphabetical (Z-A)",
          "Recently added",
        ],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          sortList();
        }
      }
    );

  const [minus, setMinus] = useState("minus");
  const [btnColor, setColor] = useState(colors.dutchWhite);

  // when minus button is pressed, it changes the icon and colour
  const minusHandler = () => {
    if (minusFlag == true) {
      setMinus("check");
      setColor(colors.burlywood);
      minusFlag = false;
    } else {
      setMinus("minus");
      setColor(colors.dutchWhite);
      minusFlag = true;
    }
  };
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.header}>
        <Text style={s.title}>Your Plants</Text>
        <TouchableOpacity onPress={minusHandler}>
          <View style={[s.button, { backgroundColor: btnColor }]}>
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
        <TouchableOpacity onPress={filterPress}>
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

      <ScrollView style={s.container}>
        {yourPlantsData.map((post) => {
          return (
            <View key={post.id}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Plant Page", {
                    name: post.name,
                    description: post.desc,
                  })
                }
              >
                <Text style={s.item}>{post.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
