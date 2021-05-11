import React from "react";
import { View, Text, Button } from "react-native";

function Schedule({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Schedule page</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Schedule;
