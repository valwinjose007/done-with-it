import React, { useState, useEffect } from "react";
import { Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";

import Screen from "./app/components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    // const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need enable permission to access the library.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const onSelectImage = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync();
    if (!cancelled) setImageUri(uri);
  };

  return (
    <Screen>
      <Button title="Select Image" onPress={onSelectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}
