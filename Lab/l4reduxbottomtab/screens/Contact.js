import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import { mapContacts, fetchContactsSuccess,} from "../redux/store";

import ContactListItem from "../components/ContactListItem";

const keyExtractor = ({ id }) => id;

const fetchContacts = async () => {
  try {
    const data = await fetch(
      "https://randomuser.me/api/?results=50"
    );

    const contactData = await data.json();

    return contactData.results.map(mapContacts);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Contacts = ({ navigation }) => {
  const { contacts } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchContacts()
      .then((contacts) => {
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch(console.log);
  }, [dispatch]);

  const renderContacts = ({ item }) => (
    <ContactListItem
      name={item.name}
      avatar={item.avatar}
      phone={item.phone}
      onPress={() =>
        navigation.navigate("ProfileContact", {
          contact: item,
        })
      }
    />
  );

  return (
    <SafeAreaView style={styles.container} edges={['']}>
      <FlatList
        data={contacts}
        keyExtractor={keyExtractor}
        renderItem={renderContacts}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Contacts;