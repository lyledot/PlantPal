import React from "react";
import {
  createStackNavigator,
} from "@react-navigation/stack";

import ViewTodos from "../screens/ViewTodos";
import AddToDo from "../screens/AddToDo";

const ToDoStack = createStackNavigator();

const ToDoStackScreen = () => {
  return (
    <ToDoStack.Navigator initialRouteName="ViewTodos" headerStyle>
      <ToDoStack.Screen
        name="ViewTodos"
        component={ViewTodos}
        options={{ headerShown: false, headerTitle: " " }}
      />
      <ToDoStack.Screen
        name="AddToDo"
        component={AddToDo}
      />
    </ToDoStack.Navigator>
  );
};

export { ToDoStackScreen };
