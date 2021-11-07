import React from "react";
import { Text, View } from "react-native";

import styles from "../Style/styles";
import { IMLocalized } from "../Translation/trans";

const HomeHeader = ({ navigation }) => {
  let userName = "هند";
  return (
    <View
      style={{
        height: "auto",
        alignItems: "left",
        marginVertical: 10,
        minWidth: "100%",
      }}
    >
      <Text style={[styles.textLarge, styles.darkBlue]}>
        {IMLocalized("Hi") + " " + userName}
      </Text>

      <Text style={[styles.textMid, styles.darkBlue, { marginTop: 5 }]}>
        {IMLocalized("Welcome to the self services")}
      </Text>

      <Text
        style={[
          styles.textLarge,
          styles.darkBlue,
          { marginTop: 35, fontSize: 24 },
        ]}
      >
        {IMLocalized("Your Services")}
      </Text>
    </View>
  );
};
export default HomeHeader;
