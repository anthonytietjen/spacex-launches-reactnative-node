import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Row } from "../../components/Row/Row";

import gql from "graphql-tag";
import { Query, query } from "react-apollo";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
    }
  }
`;

export const ListPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <Text style={styles.text}>Loading...</Text>;
            if (error) {
              console.log(error);
              return <Text style={styles.text}>Error loading data</Text>;
            }
            return data.launches.map((launch) => (
              <Row
                key={launch.flight_number}
                launch={launch}
                navigation={navigation}
              />
            ));
          }}
        </Query>
        {/* {[...Array(100).keys()].map((item) => (
          <Row key={item} />
        ))} */}
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
