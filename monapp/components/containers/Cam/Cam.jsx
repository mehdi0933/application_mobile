//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import Boutton from "../../UI/Boutton/Boutton";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const Cam = (props) => {
  //console.log(props);
  const [camPerm, setCamPerm] = useState();
  const [type, setType] = useState(Camera.Constants.Type.back);

  function toggleCamera() {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }
  useEffect(() => {
    (async () => {
      const camPermission = await Camera.requestCameraPermissionsAsync();
      setCamPerm(camPermission.granted);
    })();
  }, []);

  if (!camPerm) {
    return <Text>Accées refusée!</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.cam} type={type}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={toggleCamera}>
            <Ionicons name='camera-reverse' size={60} color='red' />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name='camera' size={60} color='green' />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cam: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 150,
    width: "80%",
    justifyContent: "space-around",
    alignSelf: "center",
  },
});

//make this component available to the app
export default Cam;
