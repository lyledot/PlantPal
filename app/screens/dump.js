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

<PlantStack.Screen
  name="Your Plants"
  component={YourPlants}
  options={
    (({ route }) => ({ title: route.params.name }), { headerShown: false })
  }
/>;


export default function AddPlant({ navigation }) {
  const optionList = [
    "Cancel",
    "==Manual Entry==",
    "Calathea Ornata",
    "Dracaena Trifasciata",
    "Fittonia",
    "Monstera Deliciosa",
    "Oxalis Triangularis",
    "Pilea Peperomioides",
    "Pothos",
    "Echiveria Succulent",
  ];

  const handlePress = (buttonIndex) => {
    this.setState({
      selected: buttonIndex,
      Region: options[buttonIndex],
    });
  };

  <ActionSheet
    ref={(o) => (ActionSheet = o)}
    options={optionList}
    cancelButtonIndex={0}
    selectedValue={state.Region}
    value={state.Region}
    onPress={handlePress}
  />;