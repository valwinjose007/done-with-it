import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.ACCOUNT}
        component={AccountScreen}
        options={{
          title: "Account",
        }}
      />
      <Stack.Screen
        name={routes.MESSAGES}
        component={MessagesScreen}
        options={{
          title: "Messages",
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
