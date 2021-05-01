import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const Row = ({ launch, navigation, handleClick }) => {
  const onClick = () => {
    handleClick(launch);
  };

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <Text style={styles.title}>{launch.mission_name}</Text>
        <View style={styles.info}>
          <View>
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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222",
    padding: 15,
    display: "flex",
    flexDirection: "column",
    borderRadius: 6,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 0,
  },
  info: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    marginBottom: 8,
  },
  text: {
    color: "#FFF",
  },
  success: {
    padding: 8,
    backgroundColor: "green",
    borderRadius: 4,
    minWidth: 75,
  },
  fail: {
    padding: 8,
    backgroundColor: "red",
    borderRadius: 4,
    minWidth: 75,
  },
});
