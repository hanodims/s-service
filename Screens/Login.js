import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("email@tst.com");
  return (
    <View style={styles.container}>
      <TextInput
        autoComplete={"email"}
        defaultValue={email}
        keyboardType={"email-address"}
        maxLength={150}
        onChangeText={setEmail}
        textAlign={"left"}
        style={{ borderWidth: 1, borderRadius: 30, height: 50, width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
