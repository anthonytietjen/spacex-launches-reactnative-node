import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import gql from "graphql-tag";
import { Query, query } from "react-apollo";

const LAUNCHDETAILS_QUERY = gql`
  query LaunchDetailsQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export const LaunchDetails = ({ route }) => {
  const { launch } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Query query={LAUNCHDETAILS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <ActivityIndicator style={{ margin: 50 }} />;
            if (error) {
              console.log(error);
              return <Text style={styles.text}>Error loading data</Text>;
            }
            return (
              <View>
                <Text style={styles.text}>{launch.mission_name}</Text>
                <Text style={styles.text}>{launch.flight_number}</Text>
                <Text style={styles.text}>{launch.launch_date_local}</Text>
              </View>
            );
          }}
        </Query>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  text: {
    color: "#FFF",
  },
});
