import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  const scrollVkew = useRef();

  return (
    // <View>
    <ScrollView
      horizontal
      ref={scrollVkew}
      // indicatorStyle="white"
      onContentSizeChange={() => scrollVkew.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {imageUris &&
          imageUris.map((imageUri) => {
            return (
              <ImageInput
                key={imageUri}
                imageUri={imageUri}
                onSelectImage={() => onRemoveImage(imageUri)}
              />
            );
          })}
        <ImageInput imageUris={null} onSelectImage={onAddImage} />
      </View>
    </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 10,
  },
});

export default ImageInputList;
