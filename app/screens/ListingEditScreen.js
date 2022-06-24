import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";
import AppFormPicker from "../components/FormPicker";
import CategoryPicketItem from "../components/CategoryPicketItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import useApi from "../hooks/useApi";
import UploadScreen from "./UploadScreen";

const validateSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"), //.nullable()
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at lease one image."),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", name: "email" }, //name change to icon
  { label: "Clothing", value: 2, backgroundColor: "yellow", name: "email" },
  { label: "Cameras", value: 3, backgroundColor: "green", name: "lock" },
  { label: "Kettle", value: 4, backgroundColor: "red", name: "email" }, //name change to icon
  {
    label: "Median & Devices",
    value: 5,
    backgroundColor: "yellow",
    name: "email",
  },
  { label: "Kitchen", value: 6, backgroundColor: "green", name: "lock" },
];

/*
{
  "category": {"backgroundColor": "yellow","label": "Clothing","name": "email", "value": 2}, 
  "description": "Test Description", 
  "images": ["file:///Users/alwinjose/Library/Developer/CoreSimulator/Devices/3D50329E-CEF0-4B2E-ADAD-165D83BE295D/data/Containers/Data/Application/78720083-0B26-45B1-A114-014E94A3ADCA/Library/Caches/ExponentExperienceData/%2540anonymous%252FDoneWithIt-ad0a975b-5fac-4014-adf5-513fa3592ea3/ImagePicker/A040BF1B-427E-4DBB-8234-24067EA39FE7.jpg"],
  "price": "1", 
  "title": "Testing"
}
*/
function ListingEditScreen(props) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  // const listingAddApi = useApi(addListings);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const response = await listingsApi.addListings(
      { ...listing, location },
      (progress) => setProgress(progress)
    );
    if (!response.ok) {
      setUploadVisible(false);
      return alert("could not save the listing");
    }

    resetForm();
  };

  return (
    <Screen>
      <UploadScreen
        visible={uploadVisible}
        progress={progress}
        onDone={() => setUploadVisible(false)}
      />
      <View style={styles.container}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            category: null,
            description: "",
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validateSchema}
        >
          <FormImagePicker name="images" />
          <AppFormField name="title" placeholder="Title" maxLength={100} />
          <AppFormField
            name="price"
            placeholder="Price"
            maxLength={8}
            keyboardType="numeric"
            width={150}
          />
          <AppFormPicker
            name="category"
            items={categories}
            placeholder="Category"
            selectedItem={{}}
            width={250}
            numberOfColumns={3}
            PicketItemComponent={CategoryPicketItem}
            // onSelectedItem={(item) => category(category)}
          />
          <AppFormField
            name="description"
            placeholder="Description"
            maxLength={500}
            multiline
            numberOfLines={3}
          />
          <AppSubmitButton title="Add Listing" />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "left",
    alignItems: "left",
    padding: 10,
  },
});

export default ListingEditScreen;
