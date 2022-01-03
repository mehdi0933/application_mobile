import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const MessageHeader = ({ title, text }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle, styles.title]}>{title}</Text>
      <Text style={[styles.textStyle, styles.text]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
    padding: 15,
    width: Dimensions.get("window").width - 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
  },
  textStyle: {
    color: "whitesmoke",
    textAlign: "center",
  },
});

export default MessageHeader;
