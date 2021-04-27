import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ListPage } from "./pages/ListPage/ListPage";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ListPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#FFF",
  },
});
