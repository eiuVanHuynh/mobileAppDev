import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import store from "./redux/store";
import Contacts from "./screens/Contact";
import Favorites from "./screens/Favorites";
import ProfileContact from "./screens/ProfileContact";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ContactsScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{ title: "Contacts" }}
      />

      <Stack.Screen
        name="ProfileContact"
        component={ProfileContact}
        options={{ title: "Profile Contact" }}
      />
    </Stack.Navigator>
  );
}

function FavoriteScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: "Favorites" }}
      />

      <Stack.Screen
        name="ProfileContact"
        component={ProfileContact}
        options={{ title: "Profile Contact" }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="ContactsScreens"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "blue",
        },
      }}
    >
      <Tab.Screen
        name="ContactsScreens"
        component={ContactsScreens}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={
                focused
                  ? "format-list-bulleted"
                  : "format-list-bulleted-type"
              }
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="FavoriteScreens"
        component={FavoriteScreens}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={
                focused
                  ? "star-check"
                  : "star-outline"
              }
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}