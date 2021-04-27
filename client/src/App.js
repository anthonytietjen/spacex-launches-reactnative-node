import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ListPage } from "./pages/ListPage/ListPage";
import { serverBaseUri } from "./config/config.json";

const apolloClient = new ApolloClient({
  uri: `${serverBaseUri}/graphql`,
});

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ListPage />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#FFF",
  },
});
