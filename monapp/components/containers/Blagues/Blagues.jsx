//import liraries
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Boutton from "../../UI/Boutton/Boutton";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const Blagues = () => {
  const [question, setQuestion] = useState("");
  const [reponse, setReponse] = useState("");
  const [showRep, setShowRep] = useState(false);
  const [update, setUpdate] = useState(false);
  function toggleReponse() {
    setShowRep(!showRep);
  }
  function toggleUpdate() {
    setUpdate(!update);
  }

  useEffect(() => {
    axios
      .get("https://blague.xyz/api/joke/random")
      .then((res) => {
        console.log(res);
        setQuestion(res.data.joke.question);
        setReponse(res.data.joke.answer);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      setShowRep(false);
    };
  }, [update]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text
          style={{
            color: "whitesmoke",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          {question}
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={toggleReponse}>
            <FontAwesome
              name={!showRep ? "eye" : "eye-slash"}
              size={30}
              color={!showRep ? "green" : "orange"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleUpdate}>
            <MaterialIcons name='autorenew' size={30} color='#4150b4' />
          </TouchableOpacity>
        </View>

        {showRep ? (
          <Text
            style={{
              color: "whitesmoke",
              fontSize: 25,
              textAlign: "center",
            }}
          >
            {reponse}
          </Text>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242424",
  },
  card: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderColor: "whitesmoke",
    padding: 25,
    margin: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-around",
    width: 150,
  },
});

//make this component available to the app
export default Blagues;
