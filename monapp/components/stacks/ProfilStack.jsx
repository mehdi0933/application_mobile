import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Cam from "../containers/Cam/Cam";
import Profil from "../containers/Profil/Profil";

const Stack = createStackNavigator();
const ProfilStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "royalblue",
        },
        headerTitleStyle: {
          color: "whitesmoke",
          fontWeight: "bold",
          textAlign: "center",
          width: Dimensions.get("window").width,
        },
        headerTintColor: "whitesmoke",
      }}
    >
      <Stack.Screen
        name='profil'
        component={Profil}
        options={{
          title: "Votre profil",
        }}
      />
      <Stack.Screen
        name='cam'
        component={Cam}
        options={{
          title: "Prenez une photo",
        }}
      />
    </Stack.Navigator>
  );
};
export default ProfilStack;
