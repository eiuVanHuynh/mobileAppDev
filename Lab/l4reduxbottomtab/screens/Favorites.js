import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import ContactThumb from "../components/ContactThumb";

const keyExtractor = ({ id }) => id;

const Favorites = ({ navigation }) => {
  const { contacts } = useSelector((state) => state);

  const favorites = contacts.filter(
    (contact) => contact.favorite
  );

  const renderFavoriteThumbnail = ({ item }) => (
    <ContactThumb
      avatar={item.avatar}
      onPress={() =>
        navigation.navigate("ProfileContact", {
          contact: item,
        })
      }
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={keyExtractor}
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={renderFavoriteThumbnail}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  list: {
    alignItems: "center",
  },
});

export default Favorites;