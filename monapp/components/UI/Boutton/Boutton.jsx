import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Boutton = ({ fonction, children }) => {
  console.log(children);
  return (
    <TouchableOpacity style={styles.boutton} onPress={fonction}>
      <Text style={styles.label}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boutton: {
    padding: 10,
    backgroundColor: "royalblue",
    borderRadius: 5,
    margin: 10,
    minWidth: 150,
  },
  label: {
    color: "whitesmoke",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Boutton;
