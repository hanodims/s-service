import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import { PROFILE } from "../screenNames";

//Components
import Profile from "../../Screens/Profile";

const { Navigator, Screen } = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Navigator initialRouteName={PROFILE}>
      <Screen
        name={PROFILE}
        component={Profile}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
