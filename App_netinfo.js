import React, { useState, useEffect } from "react";
import { Button, Text, Image, View } from "react-native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const netInfo = useNetInfo();
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const person = await AsyncStorage.getItem("person");
      console.log(JSON.parse(person));
    } catch (error) {
      console.error(error);
    }
  };

  demo();
  // NetInfo.fetch().then((netInfo) => console.log(netInfo));

  // const unSubscribe = NetInfo.addEventListener((netInfo) =>
  //   console.log(netInfo)
  // );

  // unSubscribe();

  // console.log(netInfo);

  return null;
}
