import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import React from "react";

import AppButton from "../components/Button";
import routes from "../navigation/routes";

export default WelcomeScreen = ({ navigation }) => {
  const background_image = require("../assets/background.jpg");
  const logo = require("../assets/logo-red.png");

  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={background_image}
    >
      <View style={styles.logoBackground}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          titile="Login"
          onPress={() => {
            navigation.navigate(routes.LOGIN);
          }}
        />
        <AppButton
          titile="Register"
          color="secondary"
          onPress={() => {
            navigation.navigate(routes.REGISTER);
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, alignItems: "center", justifyContent: "flex-end" },
  logoBackground: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 15,
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
});
