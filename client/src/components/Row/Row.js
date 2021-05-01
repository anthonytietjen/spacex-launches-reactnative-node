import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const Row = ({ launch, navigation, handleClick }) => {
  const onClick = () => {
    handleClick(launch);
  };

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.text}>{launch.mission_name}</Text>
          <Text style={styles.text}>Flight #: {launch.flight_number}</Text>
          <Text style={styles.text}>
            {new Date(launch.launch_date_local).toLocaleDateString("en-US")}
          </Text>
        </View>
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
  info: {
    display: "flex",
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
