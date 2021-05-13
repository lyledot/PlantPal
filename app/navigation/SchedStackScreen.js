import React from "react";
import {
  createStackNavigator,
} from "@react-navigation/stack";

import Schedule from "../screens/Schedule";
import EditSchedule from "../screens/EditSchedule";

const SchedStack = createStackNavigator();

const SchedStackScreen = () => {
  return (
    <SchedStack.Navigator initialRouteName="Schedule" headerStyle>
      <SchedStack.Screen
        name="Schedule"
        component={Schedule}
        options={{ headerShown: false, headerTitle: " " }}
      />
      <SchedStack.Screen
        name="Edit Sched"
        component={EditSchedule}
        options={{headerTitle: "Edit Schedule" }}
      />
    </SchedStack.Navigator>
  );
};

export { SchedStackScreen };
