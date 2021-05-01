import React from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Row } from "../../components/Row/Row";

import gql from "graphql-tag";
import { Query } from "react-apollo";

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

export const ListPage = ({ navigation }) => {
  const handleClick = (launch) => {
    navigation.navigate("LaunchDetails", { launch });
  };

  return (
    <View style={styles.container}>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator style={{ margin: 50 }} />;
          if (error) {
            console.log(error);
            return <Text style={styles.text}>Error loading data</Text>;
          }
          return (
            <FlatList
              data={data.launches.sort((a, b) => {
                if (a.launch_date_local > b.launch_date_local) return -1;
                if (b.launch_date_local < a.launch_date_local) return 1;
                return 0;
              })}
              keyExtractor={(launch) => launch.flight_number}
              renderItem={({ item }) => (
                <Row
                  launch={item}
                  navigation={navigation}
                  handleClick={handleClick}
                />
              )}
            />
          );
        }}
      </Query>
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
