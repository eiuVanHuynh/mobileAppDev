import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import ContactThumb from "../components/ContactThumb";
import DetailListItem from "../components/DetailListItem";

import { toggleFavorite } from "../redux/store";

const ProfileContact = ({ route }) => {
  const dispatch = useDispatch();

  const contact = useSelector((state) =>
    state.contacts.find(
      (c) => c.id === route.params.contact.id
    )
  );

  const toggle = () => {
    dispatch(toggleFavorite(contact.id));

    Alert.alert(
      "Success",
      "Favorite updated"
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['']}>
      <View style={styles.avatarSection}>
        <ContactThumb
          avatar={contact.avatar}
          name={contact.name}
          phone={contact.phone}
          textColor="white"
        />
      </View>

      <View style={styles.detailsSection}>
        <DetailListItem
          icon="email"
          title="Email"
          subtitle={contact.email}
        />

        <DetailListItem
          icon="phone"
          title="Work"
          subtitle={contact.phone}
        />

        <DetailListItem
          icon="cellphone"
          title="Personal"
          subtitle={contact.cell}
        />

        <View style={{ alignItems: "center" }}>
          <IconButton
            icon={
              contact.favorite
                ? "star-check"
                : "star-check-outline"
            }
            iconColor="#663399"
            size={30}
            onPress={toggle}
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