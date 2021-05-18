import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
} from "react-native";
import { useState } from "react";

import s from "../config/stylesheet";
import ToDoItem from "./ToDoItem";
import AddToDo from "./AddToDo";
// importing external stylesheet under variable name "s"

export default function ViewTodos({ route, navigation }) {
  const [todos, setTodos] = useState([]);
  // initialises a list of to-do's using useStates.
  // this means it will be easily updated using the "setTodos" command.

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  // if the user presses on an item in the list, it will be removed

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };
  // once the user is satisfied with their to-do, it adds it onto the array of todos

  return (
    <SafeAreaView>
      <View style={s.header}>
        <Text style={s.title}>To Do List</Text>
      </View>
      <AddToDo submitHandler={submitHandler} />
      <FlatList
        style={{ marginTop: 20 }}
        data={todos}
        renderItem={({ item }) => (
          <ToDoItem item={item} pressHandler={pressHandler} />
        )}
      />
    </SafeAreaView>
  );
}
