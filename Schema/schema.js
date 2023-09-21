const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLFloat,
} = require("graphql");
const RestaurantMenu = require("../Database/data.js");

const foodType = new GraphQLObjectType({
  name: "FoodType",
  description: "This represents food types as APPETIZERS, ENTREES",
  fields: () => ({
    name: { type: GraphQLNonNull(GraphQLString) },
    extra_sausage: { type: new GraphQLList(GraphQLNonNull(GraphQLString)) },
    price: { type: GraphQLNonNull(GraphQLFloat) },
  }),
});

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    getAPPETIZERS: {
      type: new GraphQLList(foodType),
      resolve: () => RestaurantMenu.APPETIZERS,
    },
    getENTREES: {
      type: new GraphQLList(foodType),
      resolve: () => RestaurantMenu.ENTREES,
    },
  },
});

const schema = new GraphQLSchema({
  query: queryType,
});

module.exports = schema;
