import React, { useState, useCallback} from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {SafeAreaView} from 'react-native-safe-area-context';
import { StyleSheet, View, FlatList } from "react-native";

import ContactThumb from "../components/ContactThumb";

const keyExtractor = ({ id }) => id;

const Favorites = ({ navigation }) => {
  const [contacts,setContacts]=useState([]);
    useFocusEffect(
      useCallback(() => {
        loadFavorites();
      }, [])
    );

  const loadFavorites = async () => {
    const saved = await AsyncStorage.getItem("contacts");

    if (saved) {
      setContacts(JSON.parse(saved));
    }
  };
  const favorites = contacts.filter((contact) => contact.favorite);

  const renderFavoriteThumbnail = ({ item }) => {
    return (
      <ContactThumb
        avatar={item.avatar}
        onPress={() =>
          navigation.navigate("ProfileContact", {
            contact: item,
          })
        }
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}  edges={['']}>
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
    justifyContent: "center",
  },

  list: {
    alignItems: "center",
  },
});

export default Favorites;