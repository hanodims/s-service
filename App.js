import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

// Navigation
import RootNavigator from "./Navigation";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import { useColorScheme } from "react-native";
import { init } from "./Translation/trans";

export default function App() {
  const ColorScheme = useColorScheme();
  useEffect(() => {
    init("ar");
  });
  console.log(ColorScheme);
  return (
    <NavigationContainer
      theme={ColorScheme == "dark" ? DarkTheme : DefaultTheme}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <RootNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
