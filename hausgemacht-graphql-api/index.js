const { ApolloServer } = require("apollo-server");
const { connect } = require("mongoose");

const { LOCALHOST_URI, OPTIONS } = require("./mongoose/config");
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

const server = new ApolloServer({
  resolvers,
  typeDefs
});

//connect to db
connect(LOCALHOST_URI, OPTIONS)
  .then(ok => console.log(`connected to hausgemacht-db`))
  .catch(err => console.error(`could not connect to db: ${err}`));
//start server
server
  .listen()
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`))
  .catch(err => console.error(`could not start server: ${err}`));
