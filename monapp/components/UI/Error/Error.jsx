import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Error = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  error: {
    color: "red",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
  },
});

export default Error;
