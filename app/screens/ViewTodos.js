import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { useState } from "react";
import produce from "immer";

import s from "../config/stylesheet";
import ToDoItem from "./ToDoItem";
import AddToDo from "./AddToDo";
// importing external stylesheet under variable name "s"

const Notes = (props) => props.data.map((note) => <Text>{note.text}</Text>);

export default function ViewTodos({ route, navigation }) {
  const [todos, setTodos] = useState([]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

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
