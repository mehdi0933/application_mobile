//import liraries
import React, { Component, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../../contexts/UserProvider";
import Boutton from "../../UI/Boutton/Boutton";
import Input from "../../UI/Input/Input";

// create a component
const EditInfosForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [description, setDescription] = useState(
    user.description ? user.description : ""
  );

  const [emailError, setEmailError] = useState(" ");
  const [usernameError, setUsernameError] = useState(" ");
  const [descriptionError, setDescriptionError] = useState(" ");

  function handleEmail(e) {
    setEmail(e);
    setEmailError(" ");
  }
  function handleUsername(e) {
    setUsername(e);
    setUsernameError(" ");
  }
  function handleDescription(e) {
    setDescription(e);
    setDescriptionError(" ");
  }

  function saveEdit() {
    if (
      email.includes("@") &&
      username.length > 3 &&
      (description.length > 10 || description === "")
    ) {
      setUser({
        ...user,
        email: email,
        username: username,
        description: description,
      });
    } else {
      setEmailError(email.includes("@") ? " " : "Email incorrecte");
      setUsernameError(
        username.length > 3
          ? " "
          : "Username trop court. (min. 3 caractères)"
      );
      setDescriptionError(
        description.length > 10
          ? " "
          : "Description trop courte. (min. 10 caractères)"
      );
    }
  }

  return (
    <View style={styles.container}>
      <Input
        holder='Votre nouveau email'
        change={handleEmail}
        valeur={email}
        error={emailError}
      />
      <Input
        holder='Votre nouveau username'
        change={handleUsername}
        valeur={username}
        error={usernameError}
      />
      <Input
        holder='Votre description...'
        change={handleDescription}
        valeur={description}
        error={descriptionError}
      />
      <Boutton fonction={saveEdit}>Enregistrer les modifications</Boutton>
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
export default EditInfosForm;
