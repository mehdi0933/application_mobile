//import liraries
import React, { Component, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { UserContext } from "../../contexts/UserProvider";
// create a component
const Header = ({ nav }) => {
  const { user, setUser } = useContext(UserContext);
  function openMenu() {
    nav.navigation.openDrawer();
  }

  function logout() {
    setUser(null);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openMenu} style={styles.menu}>
        <AntDesign name='menu-fold' size={25} color='whitesmoke' />
      </TouchableOpacity>
      <Text style={styles.title}>{nav.options.title}</Text>
      <View style={styles.logout}>
        <TouchableOpacity onPress={logout}>
          <AntDesign name='logout' size={25} color='whitesmoke' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
    display: "flex",
    flexDirection: "row",
  },
  logout: {
    position: "absolute",
    right: 25,
  },
  title: {
    color: "whitesmoke",
    fontSize: 25,
    fontWeight: "bold",
  },
  menu: {
    position: "absolute",
    left: 25,
  },
});

//make this component available to the app
export default Header;

//Utiliser le contexte pour déconnecter l'utilisateur en mettant user a null.
