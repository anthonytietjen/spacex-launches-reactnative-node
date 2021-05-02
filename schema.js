const axios = require("axios").default;
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const ILaunch = new GraphQLObjectType({
  name: "ILaunch",
  fields: () => ({
    flight_number: {
      type: GraphQLInt,
    },
    mission_name: {
      type: GraphQLString,
    },
    launch_date_local: {
      type: GraphQLString,
    },
    launch_success: {
      type: GraphQLBoolean,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    launches: {
      type: new GraphQLList(ILaunch),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/launches")
          .then((res) => res.data);
      },
    },
    launchDetail: {
      type: ILaunch,
      args: {
        flight_number: {
          type: GraphQLInt,
        },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
