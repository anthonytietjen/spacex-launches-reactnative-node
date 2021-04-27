import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Row = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "#FFF",
    padding: 20,
  },
  text: {
    color: "#FFF",
  },
});
