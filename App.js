import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import Screen from "./app/components/Screen";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import routes from "./app/navigation/routes";
import OfflineNotice from "./app/components/OfflineNotice";
import authStorage from "./app/auth/storage";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="click me"
      onPress={() => {
        navigation.navigate(routes.TWEET_DETAILS, { id: 1 });
      }}
    />
  );
};

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <View>
        <Text>Tweet</Text>
        <Button
          title="View Tweet"
          onPress={() => {
            navigation.navigate(routes.TWEET_DETAILS, { id: 2 });
          }}
        />
        <Link />
      </View>
    </Screen>
  );
};

const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <View>
        <Text>Tweet Details {route.params?.id}</Text>
      </View>
    </Screen>
  );
};

const Account = ({ route }) => {
  return (
    <Screen>
      <View>
        <Text>Feed</Text>
      </View>
    </Screen>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Tweet"
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
          // headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.TWEET_DETAILS}
        component={TweetDetails}
        // options={({ route }) => ({ title: route.params.id })} //not working for me
        options={{ title: "Tweet Details" }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "tomato",
        tabBarActiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#eee",
        tabBarInactiveTintColor: "black",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Tweets"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.warn(error)}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
