import React, { Component, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import colors from "../config/colors.js";

const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return date + "-" + month + "-" + year; //format: dd-mm-yyyy;
};

export default function HomeScreen({ navigation }) {
  const [plants, setPlants] = useState([
    { name: "Pilea Peperomioides", key: "1" },
    { name: "Dracaena Trifasciata", key: "2" },
    { name: "Fittonia", key: "3" },
    { name: "Pothos", key: "4" },
  ]);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>Summary</Text>
        <Text style={styles.date}>Monday 8th February</Text>
      </View>

      <View>
        <Text style={styles.subTitle}>Water me!</Text>
      </View>

      <FlatList
        style={styles.listView}
        data={plants}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item.name + " has been pressed!")}>
            <Text style={styles.item}> {item.name} </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
  title: {
    fontFamily: "PoetsenOne",
    fontSize: 30,
    left: 20,
  },
  date: {
    fontFamily: "PoetsenOne",
    flex: 1,
    textAlign: "right",
    right: 20,
    top: 15,
  },
  subTitle: {
    fontFamily: "PoetsenOne",
    fontSize: 20,
    top: 20,
    left: 20,
  },
  listView: {
    top: 20,
  },
  item: {
    fontFamily: "RobotoRegular",
    fontSize: 20,
    height: 100,
    marginTop: 20,
    marginHorizontal: 20,
    padding: 15,
    paddingTop: 35,
    justifyContent: "center",
    backgroundColor: colors.dutchWhite,
  },
});

{
  /* <View>
        <Button
          title="Button to other page"
          onPress={() =>
            navigation.navigate("Profile", { name: "Custom profile header" })
          }
        />
      </View> */
}
