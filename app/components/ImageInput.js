import React, { useEffect } from "react";
import {
  Alert,
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import defaultStyles from "../config/styles";

function ImageInput({ imageUri, onSelectImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need enable permission to access the library.");
    }
  };

  const _onSelectImage = async () => {
    if (!imageUri) {
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync();
      if (!cancelled) onSelectImage(uri);
    } else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => onSelectImage(null),
        },
        {
          text: "No",
          onPress: () => {},
        },
      ]);
  };

  return (
    <TouchableWithoutFeedback onPress={_onSelectImage}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            color={defaultStyles.colors.medium}
            size={35}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 10,
    flexDirection: "row",
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageInput;
