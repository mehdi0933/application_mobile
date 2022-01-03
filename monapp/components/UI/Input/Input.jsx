import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Error from "../Error/Error";

const Input = ({ holder, change, valeur, isPassword, error }) => {
  const [isHide, setIsHide] = useState(true);

  function toggleShowPassword() {
    setIsHide(!isHide);
  }
  console.log(window.width);
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={[styles.input]}
          placeholder={holder}
          onChangeText={change}
          value={valeur}
          secureTextEntry={isPassword && isHide}
        />
        {isPassword && (
          <TouchableOpacity onPress={toggleShowPassword}>
            <FontAwesome
              name={isHide ? "eye" : "eye-slash"}
              size={24}
              color={isHide ? "green" : "red"}
            />
          </TouchableOpacity>
        )}
      </View>
      <Error>{error}</Error>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#c9c9c9",
    borderRadius: 5,
    width: "100%",
    padding: 7,
    margin: 12,
  },
  input: {
    padding: 5,
    flex: 1,
  },
});

export default Input;
