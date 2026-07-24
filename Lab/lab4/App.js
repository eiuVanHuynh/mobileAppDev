import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { IconButton } from "react-native-paper";
import Contacts from "./screens/Contact";
import Favorites from "./screens/Favorites";
import ProfileContact from "./screens/ProfileContact";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function ContactsScreens() {
  return (
    <Stack.Navigator initialRouteName="Contacts" screenOptions={{ headerShown: true }} >
      <Stack.Screen name="Contacts" component={Contacts} options={({navigation})=>({ title: "Contacts" , headerLeft: () => (
            <IconButton
              icon="menu"
              onPress={() => navigation.openDrawer()} />
              ), })} />
      <Stack.Screen name="ProfileContact" component={ProfileContact} options={{ title: "Profile Contact" }} />
    </Stack.Navigator>
  );
}

function FavoriteScreens() {
  return (
    <Stack.Navigator initialRouteName="Favorites" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Favorites" component={Favorites} options={({navigation})=> ({ title: "Favorites" , headerLeft: () => (
            <IconButton
              icon="menu"
              onPress={() => navigation.openDrawer()} />
              ), })} />
      <Stack.Screen name="ProfileContact" component={ProfileContact} options={{ title: "Profile Contact" }} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Contacts" screenOptions={{ headerShown: false,}}>
      <Drawer.Screen
        name="Contacts"
        component={ContactsScreens}
      />

      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreens}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
