import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function AppSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <Button titile={title} onPress={handleSubmit} />;
}

export default AppSubmitButton;
