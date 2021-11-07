import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { IMLocalized } from "../Translation/trans";
import { HOME_STACK, PROFILE_STACK, LOGIN } from "./screenNames";
export const navigationOptions = ({ route }) => ({
  drawerLabel: () => {
    let name = "";
    switch (route.name) {
      case HOME_STACK:
        name = IMLocalized("Home");
        break;

      case PROFILE_STACK:
        name = IMLocalized("Profile");
        break;
      case LOGIN:
        name = IMLocalized("Login");
        break;

      default:
        return <Text>none</Text>;
    }
    return (
      <Text
        style={{
          // color: "#305F72",
          fontWeight: "bold",
          fontSize: 14,
          alignSelf: "center",
        }}
      >
        {name}
      </Text>
    );
  },
});
