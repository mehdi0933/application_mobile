//import liraries
import React, { Component, useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { UserContext } from "../../contexts/UserProvider";
// create a component
const Map = () => {
  const { user } = useContext(UserContext);
  const [userLocation, setUserLocation] = useState({
    latitude: 48,
    longitude: 2,
  });

  useEffect(() => {
    (async () => {
      const locationPermission =
        await Location.requestForegroundPermissionsAsync();
      if (locationPermission.granted) {
        const location = await Location.getCurrentPositionAsync({});
        console.log(location);
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          longitude: userLocation.longitude,
          latitude: userLocation.latitude,
          longitudeDelta: 0.1,
          latitudeDelta: 0.1,
        }}
        mapType='hybrid'
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          }}
          style={{ height: 100, width: 100 }}
        >
          <Text
            style={{ color: "black", fontSize: 25, textAlign: "center" }}
          >
            {user.username}
          </Text>
          <Image
            style={{ height: 100, width: 100, borderRadius: 50 }}
            source={{ uri: user.avatar }}
          />
        </Marker>
      </MapView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  map: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});

//make this component available to the app
export default Map;

// Utiliser useEffect pour demander la permission d'acceder a la location de l'utilisateur.
// Enregistrer la location de l'utilisateur dans une variable d'etat.
// Afficher dans la propriete region  de la MapView, la location de l'utilisateur
