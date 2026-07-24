import React, { useState, useCallback} from "react";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {mapContacts} from "../utils/mapContacts";

import ContactListItem from "../components/ContactListItem";

const keyExtractor =({id}) => id;
const fetchContacts = async () => {
 try {
    const data = await fetch("https://randomuser.me/api/?results=50");
    const ContactData = await data.json();
    return ContactData.results.map(mapContacts);
  } catch (error) {
    console.error("Lỗi khi fetch API:", error);
    return [];
  }
};
const Contacts = ({navigation})=>{
  const [contacts, setContacts] = useState([]);
    useFocusEffect(
      useCallback(() => {
        loadContacts();
      }, [])
    );
  const loadContacts = async () => {

    const saved = await AsyncStorage.getItem("contacts");

    if(saved){

        setContacts(JSON.parse(saved));

    }else{

        const list = await fetchContacts();

        setContacts(list);

        await AsyncStorage.setItem(
            "contacts",
            JSON.stringify(list)
        );
    }

};
const renderContacts = ({item}) =>{
  const {name, avatar, phone} = item;
  return <ContactListItem
    name={name}
    avatar={avatar}
    phone={phone}
    onPress={() =>
          navigation.navigate("ProfileContact", {
            contact: item,
          })
        } />;
};
return (
  <SafeAreaView style={styles.container} edges={['']}>
      <FlatList
          data={contacts}
          keyExtractor={keyExtractor}
          renderItem={renderContacts} />
  </SafeAreaView>
)}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  }
});

export default Contacts;
