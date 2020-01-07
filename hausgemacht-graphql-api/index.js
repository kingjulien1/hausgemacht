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
app.listen(4001, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/hausgemacht-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
});

console.log("hausgemacht-graphql-api up and running on port 4001 👩‍🍳");
