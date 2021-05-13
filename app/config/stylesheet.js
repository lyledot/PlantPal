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
  item: {
    fontFamily: "RobotoBold",
    fontSize: 20,
    height: 100,
    borderRadius: 15, // rounded corners
    overflow: "hidden",
    marginBottom: 15,
    marginHorizontal: 20,
    backgroundColor: colors.grey,
    paddingTop: 55,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: colors.dutchWhite,
    width: 30,
    height: 30,
    borderRadius: 8,
    overflow: "hidden",
    marginHorizontal: 3,
    left: 127,
  },
  rowPH: {
    backgroundColor: colors.grey,
    height: 45,
    borderRadius: 10, // rounded corners
    overflow: "hidden",
    marginHorizontal: 20,
  },
  photo: {
    backgroundColor: colors.dutchWhite,
    height: 350,
    borderRadius: 30, // rounded corners
    overflow: "hidden",
    margin: 20,
  },
  descBox: {
    backgroundColor: colors.grey,
    height: 400,
    borderRadius: 30, // rounded corners
    overflow: "hidden",
    marginHorizontal: 20,
  },
  descText: {
    fontFamily: "RobotoRegular",
    fontSize: 15,
    padding: 25,
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
    paddingHorizontal: 15,
  },
  picker: {
    backgroundColor: colors.grey,
    borderRadius: 10, // rounded corners
    overflow: "hidden",
    marginHorizontal: 20,
    paddingHorizontal: 15,
  },
  schedRow: {
    backgroundColor: colors.grey,
    height: 45,
    borderRadius: 10, // rounded corners
    overflow: "hidden",
    marginHorizontal: 20,
    marginTop: 15,
    paddingTop: 13,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  schedPlant: {
    fontFamily: "RobotoBold",
    fontSize: 15,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  schedDay: {
    fontFamily: "RobotoRegular",
    fontSize: 15,
    paddingBottom: 10,
    paddingRight: 20,
  },
});
