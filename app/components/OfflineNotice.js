import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";
import Text from "./Text";

function OfflineNotice(props) {
  const { type, isInternetReachable } = useNetInfo();

  if (type !== "unknown" && isInternetReachable == false)
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>No Internet Connection</Text>
        </View>
      </SafeAreaView>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
