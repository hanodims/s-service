import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import { HOME } from "../screenNames";

//Components
import Home from "../../Screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Navigator initialRouteName={HOME}>
      <Screen name={HOME} component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
}
