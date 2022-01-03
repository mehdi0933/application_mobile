//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Boutton from "../../UI/Boutton/Boutton";

// create a component
const MenuSecret = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <View style={styles.container}>
      <Boutton fonction={toggleMenu}>
        {showMenu ? "Cacher" : "Afficher"}
      </Boutton>
      {showMenu && children}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default MenuSecret;
