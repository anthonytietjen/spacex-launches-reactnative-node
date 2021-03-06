import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ListPage } from "./pages/ListPage/ListPage";
import { serverBaseUri } from "./config/config.json";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LaunchDetails } from "./pages/LaunchDetails/LaunchDetails";

const apolloClient = new ApolloClient({
  uri: `${serverBaseUri}/graphql`,
});

const Stack = createStackNavigator();

const linking = {
  config: {
    screens: {
      Home: "",
      LaunchDetails: "/Details/:flight_number",
    },
  },
};

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style="auto" />
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          detachInactiveScreens={false}
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#FFF",
          }}
        >
          <Stack.Screen
            name="Home"
            component={ListPage}
            options={{ title: "X Launches" }}
          />
          <Stack.Screen
            name="LaunchDetails"
            component={LaunchDetails}
            options={{ title: "Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
