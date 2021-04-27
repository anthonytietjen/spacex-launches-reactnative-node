import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const Row = ({ launch }) => {
  const handleClick = () => {
    console.log({ launch });
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {launch.mission_name} {process.env.REACT_NATIVE_HI}
        </Text>
      </View>
    </TouchableOpacity>
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
