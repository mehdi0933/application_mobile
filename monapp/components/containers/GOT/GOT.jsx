//import liraries
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

import { TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
const getPersoUrl = "https://thronesapi.com/api/v2/Characters";
const GOT = () => {
  const [personnages, setPersonnages] = useState([]);
  useEffect(() => {
    axios
      .get(getPersoUrl)
      .then((reponse) => {
        console.log(reponse);
        setPersonnages(reponse.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const searchPerso = async (perso) => {
    await WebBrowser.openBrowserAsync(
      "https://www.google.com/search?q=" + perso
    );
  };
  return (
    <ScrollView style={styles.container}>
      <>
        {personnages.map((element) => {
          return (
            <TouchableOpacity
              onPress={() => searchPerso(element.fullName)}
              key={element.id}
              style={styles.card}
            >
              <Text style={styles.fullName}> {element.fullName} </Text>
              <Image
                style={styles.image}
                source={{ uri: element.imageUrl }}
              />
              <Text style={styles.title}>{element.title}</Text>
            </TouchableOpacity>
          );
        })}
      </>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242424",
  },
  card: {
    marginVertical: 25,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "whitesmoke",
    borderRadius: 10,
    padding: 30,
    width: Dimensions.get("window").width - 50,
    alignSelf: "center",
  },
  fullName: {
    color: "whitesmoke",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginVertical: 25,
    borderRadius: 100,
  },
  title: {
    color: "whitesmoke",
    fontSize: 20,
    textAlign: "center",
  },
});
export default GOT;
