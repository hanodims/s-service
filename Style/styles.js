import { StyleSheet } from "react-native";
import colors from "../Style/Colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },

  textLarge: { fontSize: 30, fontWeight: "800" },
  textMid: { fontSize: 20 },
  textSmall: { fontSize: 18 },
  darkBlue: { color: colors.darkBlue },
  green: { color: colors.green },
  blue: { color: colors.blue },
  tintGreen: { tintColor: colors.green },

  header: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  headerIcon: {
    height: "100%",
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 15,
  },

  servicListCard: {
    minWidth: 150,
    height: 160,
    backgroundColor: colors.lighGreen,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 30,
    marginVertical: 9,
    flexDirection: "column",
    paddingVertical: 20,
  },
});

export default styles;
