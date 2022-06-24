import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../Text";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.errorText}>{error}</AppText>;
}

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    alignSelf: "flex-start",
  },
});

export default ErrorMessage;
