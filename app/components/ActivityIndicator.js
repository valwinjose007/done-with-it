import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        source={require("../assets/animations/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "white",
    opacity: 0.5,
    height: "100%",
    width: "100%",
  },
});

export default ActivityIndicator;
