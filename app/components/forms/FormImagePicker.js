import React from "react";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const {
    handleChange,
    setFieldValue,
    errors,
    touched,
    setFieldTouched,
    values,
  } = useFormikContext();
  const imageUris = values[name];

  const onAddImage = (imageUri) => {
    console.log("onAddImage :::::", imageUri);
    let copyOfImageUris = [...imageUris];
    copyOfImageUris.push(imageUri);
    setFieldValue(name, copyOfImageUris);
  };

  const onRemoveImage = (imageUri) => {
    console.log("onRemoveImage :::::", imageUri);
    let copyOfImageUris = [...imageUris];
    setFieldValue(
      name,
      copyOfImageUris.filter((imgUri) => imgUri !== imageUri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={onAddImage}
        onRemoveImage={onRemoveImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
