const { ApolloServer } = require("apollo-server-express");
const schema = require("./graphql/schema");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const server = new ApolloServer({
  schema,
  playground: true
});

server.applyMiddleware({ app });
app.listen(4001, () => {});
