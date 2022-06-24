import React from "react";
import { View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({ name, size = 40, backgroundColor = "#000", color = "#fff" }) {
  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={name} size={size * 0.5} color={color} />
    </View>
  );
}

export default Icon;
