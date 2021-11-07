import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import styles from "../Style/styles";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.headerIcon}
      >
        <Image
          style={styles.tintGreen}
          source={require("../assets/icons/menu.png")}
          resizeMode="center"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerIcon}>
        <Image
          style={styles.tintGreen}
          source={require("../assets/icons/bell.png")}
          resizeMode="center"
        />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
