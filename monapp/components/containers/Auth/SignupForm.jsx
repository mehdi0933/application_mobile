//import liraries
import React, { Component, useContext, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { UserContext } from "../../contexts/UserProvider";
import Card from "../../HOC/Card/Card";
import Boutton from "../../UI/Boutton/Boutton";
import Input from "../../UI/Input/Input";
import MessageHeader from "../HeaderMessage/HeaderMessage";

// create a component
const SignupForm = () => {
  const userContext = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState(" ");
  const [usernameError, setUsernameError] = useState(" ");
  const [passwordError, setPasswordError] = useState(" ");
  const [confirmPasswordError, setConfirmPasswordError] = useState(" ");

  function handleEmail(e) {
    setEmail(e);
    setEmailError(" ");
  }
  function handleUsername(e) {
    setUsername(e);
    setUsernameError(" ");
  }
  function handlePassword(e) {
    setPassword(e);
    setPasswordError(" ");
  }
  function handleConfirmPassword(e) {
    setConfirmPassword(e);
    setConfirmPasswordError(" ");
  }

  function signup() {
    if (
      email.includes("@") &&
      username.length > 3 &&
      password.length > 6 &&
      confirmPassword === password
    ) {
      userContext.setUser({ username: username, email: email });
    } else {
      setEmailError(email.includes("@") ? " " : "Email incorrecte");
      setUsernameError(
        username.length > 3
          ? " "
          : "Username trop court. (min. 3 caractères)"
      );
      setPasswordError(
        password.length > 6
          ? " "
          : "Mot de passe trop court. (min. 6 caractères)"
      );
      setConfirmPasswordError(
        confirmPassword === password
          ? " "
          : "Les mots de passe ne sont pas identiques"
      );
    }
  }
  return (
    <Card>
      <MessageHeader title='Bienvenue' text='Veuillez vous inscrire!' />
      <Input
        holder='Email'
        change={handleEmail}
        valeur={email}
        error={emailError}
      />
      <Input
        holder='Username'
        change={handleUsername}
        valeur={username}
        error={usernameError}
      />
      <Input
        holder='Mot de passe'
        change={handlePassword}
        valeur={password}
        error={passwordError}
        isPassword
      />
      <Input
        holder='Confirmez votre mot de passe'
        change={handleConfirmPassword}
        valeur={confirmPassword}
        error={confirmPasswordError}
        isPassword
      />
      <Boutton fonction={signup}>S'inscrire</Boutton>
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
export default SignupForm;

// Implemtenter le SignupForm.jsx:
// username: ne soit pas vide
// email: doit inclure un @
// password: doit etre > 6
// confirmPassword: doit etre egale a password
