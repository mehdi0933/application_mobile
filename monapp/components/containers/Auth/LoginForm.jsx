//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
} from "react-native";
import HeaderMessage from "../HeaderMessage/HeaderMessage";
import Boutton from "../../UI/Boutton/Boutton";
import Input from "../../UI/Input/Input";
import Card from "../../HOC/Card/Card";
// create a component
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(" ");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(" ");

  function handleEmail(e) {
    setEmailError(" ");
    setEmail(e);
    console.log(e);
  }

  function handlePassword(e) {
    setPasswordError(" ");
    setPassword(e);
  }

  function login() {
    if (email.includes("@") && password.length > 6) {
      alert("Connected!");
    } else {
      setEmailError(email.includes("@") ? "" : "Email incorrecte!");
      setPasswordError(
        password.length > 6
          ? ""
          : "Mot de passe trop court! (Min. 6 caractères)"
      );
    }
  }
  console.log("text");
  return (
    <Card>
      <HeaderMessage title='Bienvuenue!' text='Veuillez vous connecter.' />
      <Input
        holder='Email'
        change={handleEmail}
        valeur={email}
        error={emailError}
      />

      <Input
        holder='Mot de passe'
        change={handlePassword}
        valeur={password}
        isPassword
        error={passwordError}
      />

      <Boutton fonction={login}>Se connecter</Boutton>
    </Card>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - 30,
  },
});

//make this component available to the app
export default LoginForm;

//Créer un composant components/UI/Input/Input.jsx
//Props: placeholder, onChangeText, value, secureTextEntry
