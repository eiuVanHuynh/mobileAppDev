import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton } from "react-native-paper";

import ContactThumb from "../components/ContactThumb";
import DetailListItem from "../components/DetailListItem";

const ProfileContact = ({ route }) => {
  const { contact } = route.params;
  const { id, avatar, name, email, phone, cell } = contact;

  
  const [isFavorite, setIsFavorite] = useState(contact.favorite);

  const toggleFavorite = async () => {
    try {
      const saved = await AsyncStorage.getItem("contacts");

      if (!saved) return;

      const contacts = JSON.parse(saved);

      const updated = contacts.map((c) =>
        c.id === id
          ? {
              ...c,
              favorite: !c.favorite,
            }
          : c
      );

      await AsyncStorage.setItem(
        "contacts",
        JSON.stringify(updated)
      );

      setIsFavorite(!isFavorite);

      Alert.alert("Success", "Favorite updated");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['']}>
      <View style={styles.avatarSection}>
        <ContactThumb
          avatar={avatar}
          name={name}
          phone={phone}
          textColor="white"
        />
      </View>

      <View style={styles.detailsSection}>
        <DetailListItem
          icon="email"
          title="Email"
          subtitle={email}
        />

        <DetailListItem
          icon="phone"
          title="Work"
          subtitle={phone}
        />

        <DetailListItem
          icon="cellphone"
          title="Personal"
          subtitle={cell}
        />

        <View style={{ alignItems: "center" }}>
          <IconButton
            icon={
              isFavorite
                ? "star-check"
                : "star-check-outline"
            }
            iconColor="#663399"
            size={30}
            onPress={toggleFavorite}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },

  detailsSection: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default ProfileContact;