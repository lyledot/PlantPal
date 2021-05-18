"use strict";
import { StyleSheet } from "react-native";

import colors from "./colors.js";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 20,
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
    marginTop: 20,
  },
  container: {
    marginTop: 20,
    paddingTop: 10,
    flex: 1,
  },
  imageText: {
    position: "absolute",
    fontFamily: "RobotoBold",
    fontSize: 20,
    marginHorizontal: 35,
    marginTop: 60,
    color: "#fff",
  },
  image: {
    height: 100,
    borderRadius: 15, // rounded corners
    overflow: "hidden",
    marginBottom: 15,
    marginHorizontal: 20,
    paddingTop: 55,
    paddingHorizontal: 15,
  },
  item: {
    fontFamily: "RobotoBold",
    backgroundColor: colors.grey,
    fontSize: 20,
    height: 100,
    borderRadius: 15, // rounded corners
    overflow: "hidden",
    marginBottom: 15,
    marginHorizontal: 20,
    paddingTop: 55,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: colors.dutchWhite,
    width: 30,
    height: 30,
    borderRadius: 8,
    overflow: "hidden",
    marginHorizontal: 3,
    left: 150,
  },
  photo: {
    height: 350,
    borderRadius: 30, // rounded corners
    overflow: "hidden",
    margin: 20,
  },
  descBox: {
    backgroundColor: colors.grey,
    borderRadius: 30, // rounded corners
    overflow: "hidden",
    marginHorizontal: 20,
  },
  descText: {
    fontFamily: "RobotoRegular",
    fontSize: 15,
    paddingHorizontal: 25,
  },
  body: {
    fontFamily: "RobotoRegular",
    fontSize: 15,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  input: {
    backgroundColor: colors.grey,
    height: 45,
    borderRadius: 10, // rounded corners
    overflow: "hidden",
    marginHorizontal: 20,
  },
  picker: {
    backgroundColor: colors.grey,
    borderRadius: 10, // rounded corners
    overflow: "hidden",
    marginHorizontal: 20,
    paddingHorizontal: 15,
  },
  toDoRow: {
    backgroundColor: colors.grey,
    height: 45,
    borderRadius: 10, // rounded corners
    overflow: "hidden",
    marginTop: 15,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  factSpace: {
    fontFamily: "RobotoBold",
    backgroundColor: colors.grey,
    fontSize: 20,
    flex: 0.5,
    borderRadius: 15, // rounded corners
    overflow: "hidden",
    margin: 20,
    paddingTop: 130,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  factButton: {
    backgroundColor: colors.dutchWhite,
    marginHorizontal: 20,
    borderRadius: 8,
    overflow: "hidden",
    height: 30,
  },
  toDoButton: {
    backgroundColor: colors.dutchWhite,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 8,
    overflow: "hidden",
    height: 30,
  },
  descHeading: {
    fontFamily: "RobotoBold",
    fontSize: 15,
    paddingTop: 25,
    paddingHorizontal: 25,
  },
});
