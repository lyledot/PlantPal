import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import s from "../config/stylesheet";
// importing external stylesheet under variable name "s"
import plantsData from "../database/plants.json";
// importing external database under variable name "yourPlantsData"

var minusFlag = true;

export default function YourPlants({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.header}>
        <Text style={s.title}>Plant Database</Text>
      </View>

      <ScrollView style={s.container}>
        {/* Generates a scrollable list of each plant in the JSON array,
        this will display the plant name and a small image.
        Upon pressing on the item, it will take the user to a dedicated plant page with more information about the plant. */}
        {plantsData.map((post) => {
          return (
            <View key={post.id}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Plant Page", {
                    name: post.name,
                    desc: post.desc,
                    image: post.imageURL,
                    light: post.light,
                    temp: post.temperature,
                    sched: post.watering,
                  })
                }
              >
                <Image source={{ uri: post.imageURL }} style={s.image} />
                <Text style={s.imageText}>{post.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
