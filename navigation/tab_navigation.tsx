import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  RootStackParamList,
  HomeStackScreen,
  ExplorerStackScreen,
  AddStackScreen,
  LibraryStackScreen,
  MyAccountStackScreen,
  LogginStackScreen,
} from "./app_stacks";
import { StyleSheet } from "react-native";


// Define main tab navigator
const Tab = createBottomTabNavigator<RootStackParamList>();
export const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any; // TODO: find better type
            if (route.name === "Accueil") {
              iconName = focused
                ? "ios-home-outline" //? quand on clique dessus
                : "ios-home-outline"; //quand pas sélectionné
            } else if (route.name === "Explorer") {
              iconName = focused ? "md-compass" : "md-compass";
            } else if (route.name === "Créer") {
              iconName = focused
                ? "ios-add-circle-outline"
                : "ios-add-circle-outline";
            } else if (route.name === "Bibliothèque") {
              iconName = focused ? "ios-albums" : "ios-albums";
            } else if (route.name === "Profil") {
              iconName = focused ? "ios-person-outline" : "ios-person-outline";
            }
              else if (route.name === "Loggin") {
              iconName = focused ? "ios-person-outline" : "ios-person-outline";
              size = 100;
              color = 'white';
              
            }

            // You can return any component that you like here!
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
                style={styles.icons}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "white", //couleur icone quand onglet actif
          inactiveTintColor: "white", //couleur icone quand inactif
          inactiveBackgroundColor: "#318CE7", //couleur fond de l'icone quand inactif
          activeBackgroundColor: "#77B5FE",
        }}
      >
        
        <Tab.Screen
          name="Accueil"
          component={HomeStackScreen}
          options={{ tabBarBadge: 1 }} //tab bar badge c'est pour avoir les notifications, le chiffre c'est le nombre qui est dans la notif
        />
        <Tab.Screen name="Explorer" component={ExplorerStackScreen} />
        <Tab.Screen name="Créer" component={AddStackScreen} />
        <Tab.Screen name="Bibliothèque" component={LibraryStackScreen} />
        <Tab.Screen name="Profil" component={MyAccountStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icons: {},
});
