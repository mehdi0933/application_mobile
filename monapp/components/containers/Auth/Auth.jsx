import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Boutton from "../../UI/Boutton/Boutton";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  function toggleLogin() {
    setIsLogin(!isLogin);
  }

  return (
    <View style={styles.container}>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <Boutton fonction={toggleLogin}>
        {isLogin
          ? "Pas encore membre? Inscrivez-vous!"
          : "Deja inscrit? Connectez vous!"}
      </Boutton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Auth;
