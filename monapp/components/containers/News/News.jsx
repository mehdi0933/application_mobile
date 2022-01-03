//import liraries
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Input from "../../UI/Input/Input";
import Boutton from "../../UI/Boutton/Boutton";
// create a component
const News = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("noel");

  const [update, setUpdate] = useState(false);

  function handleSearch(e) {
    setSearch(e);
  }

  function toggleUpdate() {
    setUpdate(!update);
  }

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=" +
          search +
          "&apiKey=657b45d437354db4860405594c48d967&language=fr"
      )
      .then((reponse) => {
        console.log(reponse);
        setArticles(reponse.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, [update]);

  return (
    <ScrollView style={styles.container}>
      <Input holder='Recherche' valeur={search} change={handleSearch} />
      <Boutton fonction={toggleUpdate}>Search</Boutton>
      {articles.map((element) => {
        return (
          <View key={element.urlToImage}>
            <Text>{element.title}</Text>
            <Image
              style={{ height: 200, width: 200 }}
              source={{ uri: element.urlToImage }}
            />
            <Text>{element.description}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default News;
