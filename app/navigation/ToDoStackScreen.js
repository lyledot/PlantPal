import React from "react";
import {
  createStackNavigator,
} from "@react-navigation/stack";

// importing screens for stack navigator use
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
        // removes the header and the text for the back button on the following screen.
      />
      <ToDoStack.Screen
        name="AddToDo"
        component={AddToDo}
      />
    </ToDoStack.Navigator>
  );
};

export { ToDoStackScreen };
