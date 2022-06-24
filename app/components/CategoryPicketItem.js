import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Text from "./Text";
import Icon from "./Icon";

function CategoryPicketItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={item.name} backgroundColor={item.backgroundColor} size={70} />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    width: "33%",
    alignItems: "center",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPicketItem;
