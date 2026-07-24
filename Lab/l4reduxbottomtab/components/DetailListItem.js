import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";

const DetailListItem = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Icon source={icon} size={24} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
  },

  textContainer: {
    marginLeft: 16,
    flex: 1,
  },

  title: {
    fontSize: 14,
    color: "gray",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "blue",
  },
});
export default DetailListItem;