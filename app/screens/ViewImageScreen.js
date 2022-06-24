import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  const image = require("../assets/chair.jpg");
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={"white"} size={35} />
      </View>
      <Image resizeMode="contain" source={image} style={styles.image} />
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color={"white"} size={35} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 60,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon: {
    position: "absolute",
    top: 60,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
