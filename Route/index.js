const express = require("express");
const router = express.Router();
const { graphqlHTTP } = require("express-graphql");
const schema = require("../Schema/schema.js");

router.use("/graphql", graphqlHTTP({ graphiql: true, schema: schema }));

router.use("/", (req, res, next) => {
  res.send("page not found");
});

module.exports = router;
