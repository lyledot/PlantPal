import React from "react";
import { View, Text, Button } from "react-native";

function YourPlants({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Your Plants</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default YourPlants;
