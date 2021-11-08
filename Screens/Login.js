import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("email@tst.com");
  const [password, setPassword] = useState("h");
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
      <TextInput
        autoComplete={"password"}
        defaultValue={password}
        maxLength={150}
        onChangeText={setPassword}
        textAlign={"left"}
        style={{ borderWidth: 1, borderRadius: 30, height: 50, width: "100%" }}
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
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
