import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";

import Button from "../components/Button";
import Text from "../components/Text";
import Card from "../components/Card";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  // const {
  //   data: listings,
  //   loading,
  //   error,
  //   request: getListings,
  // } = useApi(listingsApi.getListings);
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    // getListings();
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <View style={styles.errorContainer}>
          <Text>Couldn't retrive the listings.</Text>
          <Button titile="Retry" onPress={getListingsApi.request} />
        </View>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  errorContainer: {
    padding: 10,
    alignItems: "center",
  },
});

export default ListingsScreen;
