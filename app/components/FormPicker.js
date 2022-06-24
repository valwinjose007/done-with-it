import { useFormikContext } from "formik";
import React from "react";

import Picker from "./Picker";
import ErrorMessage from "./forms/ErrorMessage";

function AppFormPicker({
  name,
  icon,
  items,
  width,
  numberOfColumns,
  placeholder,
  selectedItem,
  onSelectedItem,
  PicketItemComponent,
}) {
  const {
    errors,
    handleChange,
    setFieldValue,
    setFieldTouched,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      <Picker
        icon={icon}
        items={items}
        width={width}
        numberOfColumns={numberOfColumns}
        PicketItemComponent={PicketItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        onSelectedItem={(item) => setFieldValue(name, item)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
