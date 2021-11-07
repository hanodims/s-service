import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import { HOME_STACK, PROFILE_STACK, LOGIN } from "./screenNames.js";

//Components
import Login from "../Screens/Login";
import ProfileStack from "./Stack/ProfileStack.js";
import HomeStack from "./Stack/HomeStack.js";

// Config
import {
  navigationOptions,
  // customdrawerContent,
  // customDrawerContentOptions,
} from "./screenOptions";

const { Navigator, Screen } = createDrawerNavigator();

function RootNavigator() {
  return (
    <Navigator
      initialRouteName={LOGIN}
      screenOptions={navigationOptions}
      //   drawerContent={customdrawerContent}
      //   drawerContentOptions={customDrawerContentOptions}
    >
      <Screen
        name={HOME_STACK}
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Screen
        name={PROFILE_STACK}
        component={ProfileStack}
        options={{ headerShown: false }}
      />
      <Screen name={LOGIN} component={Login} options={{ headerShown: false }} />
    </Navigator>
  );
}

export default RootNavigator;
