import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Blagues from "../containers/Blagues/Blagues";
import GOT from "../containers/GOT/GOT";
import Header from "../containers/Header/Header";
import Map from "../containers/Map/Map";
import News from "../containers/News/News";
import ProfilStack from "../stacks/ProfilStack";
const MyDrawer = createDrawerNavigator();
const Drawer = () => {
  return (
    <MyDrawer.Navigator
      screenOptions={{
        header: (navigationProps) => <Header nav={navigationProps} />,
      }}
    >
      <MyDrawer.Screen
        name='news'
        component={News}
        options={{
          title: "Articles",
        }}
      />

      <MyDrawer.Screen
        name='profilstack'
        component={ProfilStack}
        options={{
          title: "Profil",
        }}
      />
      <MyDrawer.Screen
        name='map'
        component={Map}
        options={{
          title: "Map",
        }}
      />
      <MyDrawer.Screen
        name='got'
        component={GOT}
        options={{ title: "Personnages de game of thrones" }}
      />

      <MyDrawer.Screen
        name='blagues'
        component={Blagues}
        options={{
          title: "Blagues",
        }}
      />
    </MyDrawer.Navigator>
  );
};

export default Drawer;

// Créer un composant components/containers/Map/Map.jsx
// Ajouter le composant dans un Screen dans le Drawer

//
