import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Row } from "../../components/Row/Row";

export const ListPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {[...Array(100).keys()].map((item) => (
          <Row key={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#FFF",
  },
});
