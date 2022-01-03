//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

// create a component
const Card = ({ titre, children }) => {
  const window = useWindowDimensions();
  console.log(children);
  return (
    <View
      style={[
        styles.container,
        { width: window.width - 30, maxWidth: 750 },
      ]}
    >
      <Text style={styles.titre}>{titre}</Text>
      {children}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#d9d9d9",
    alignSelf: "center",
    marginTop: 50,
  },
  titre: {
    fontSize: 25,
    fontWeight: "bold",
    borderBottomWidth: 3,
  },
});

//make this component available to the app
export default Card;
