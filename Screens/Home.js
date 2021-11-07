import React from "react";
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "../Style/styles";
import { data } from "../servicesData";
import Header from "../Components/Header";
import HomeHeader from "../Components/HomeHeader";

export default function Home({ navigation }) {
  const items = data.map((item) => {
    return (
      <TouchableOpacity key={item.id} style={styles.servicListCard}>
        <Image
          style={{ height: 50, width: 50 }} //tintColor: "#1C396A"
          source={item.logo}
        />
        <Text style={[styles.textSmall, styles.darkBlue]}>{item.name}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{}}>
        <SafeAreaView />
        <Header navigation={navigation} />
        <HomeHeader navigation={navigation} />
        <View style={styles.cardsContainer}>{items}</View>
      </View>
    </ScrollView>
  );
}
