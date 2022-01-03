import { StatusBar } from "expo-status-bar";
import { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./components/containers/Auth/Auth";
import MessageHeader from "./components/containers/HeaderMessage/HeaderMessage";
import Profil from "./components/containers/Profil/Profil";
import { globalStyles } from "./globalStyles";
import { UserContext } from "./components/contexts/UserProvider";
import ProfilStack from "./components/stacks/ProfilStack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const fakeUser = { username: "Samy", email: "sam@sam.com" };
  const [user, setUser] = useState(fakeUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <View style={globalStyles.container}>
          {user ? <ProfilStack /> : <Auth />}
        </View>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
