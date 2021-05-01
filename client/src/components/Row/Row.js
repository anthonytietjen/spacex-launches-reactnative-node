import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const Row = ({ launch, navigation, handleClick }) => {
  const onClick = () => {
    handleClick(launch);
  };

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <Text style={styles.text}>{launch.mission_name}</Text>
        {launch.launch_success && (
          <View style={styles.success}>
            <Text>Success</Text>
          </View>
        )}
        {!launch.launch_success && (
          <View style={styles.fail}>
            <Text>Fail</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "#FFF",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#FFF",
  },
  success: {
    padding: 8,
    backgroundColor: "green",
  },
  fail: {
    padding: 8,
    backgroundColor: "red",
  },
});
