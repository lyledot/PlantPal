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
});
