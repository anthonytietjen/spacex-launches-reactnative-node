import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Row } from "../../components/Row/Row";

import gql from "graphql-tag";
import { Query, query } from "react-apollo";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export const LaunchDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <ActivityIndicator style={{ margin: 50 }} />;
            if (error) {
              console.log(error);
              return <Text style={styles.text}>Error loading data</Text>;
            }
            return (
              <View>
                <Text style={styles.text}>Details</Text>
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
  },
  text: {
    color: "#FFF",
  },
});
