import React, { Component, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { UserContext } from "../../contexts/UserProvider";
import Card from "../../HOC/Card/Card";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import MenuSecret from "../../HOC/MenuSecret/MenuSecret";
import EditInfosForm from "./EditInfosForm";
const ImageDefautUrl =
  "https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-de-profil-avatar-par-d%C3%A9faut-image-sociale-utilisateur-m%C3%A9dias-social-182145777.jpg";

const Profil = (props) => {
  console.log(props);
  const { user, setUser } = useContext(UserContext);

  const openImagePicker = async () => {
    const mediaPermission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!mediaPermission.granted) {
      alert("Permission refusée!");
    } else {
      const pickedImage = await ImagePicker.launchImageLibraryAsync();
      if (!pickedImage.cancelled) {
        setUser({ ...user, avatar: pickedImage.uri });
      }
    }
  };
  function goCam() {
    props.navigation.push("cam");
  }
  return (
    <Card titre='Votre profil'>
      <View>
        <Image
          style={styles.image}
          source={{ uri: user.avatar ? user.avatar : ImageDefautUrl }}
        />
        <View style={styles.icons}>
          <TouchableOpacity onPress={openImagePicker}>
            <Entypo name='folder-images' size={35} color='black' />
          </TouchableOpacity>
          <TouchableOpacity onPress={goCam}>
            <Entypo name='camera' size={35} color='black' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infos}>
        <View>
          <Text style={styles.infoTitle}>Username:</Text>
          <Text style={styles.info}>{user.username}</Text>
        </View>

        <Text style={styles.info}>{user.email}</Text>
        <Text style={styles.info}>
          {user.description
            ? user.description
            : "Ajoutez une description..."}
        </Text>
      </View>
      <MenuSecret>
        <EditInfosForm />
      </MenuSecret>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    margin: 20,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infos: {
    marginVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "gray",
    paddingVertical: 10,
  },
  infoTitle: {
    fontWeight: "bold",
  },
  info: {
    fontSize: 18,
  },
});

export default Profil;

// Créer un composant Profil/EditInfosForm.jsx.
// 3 inputs: emai, username et description.
// Utiliser useContext pour modifier les infos de l'utilisateur
