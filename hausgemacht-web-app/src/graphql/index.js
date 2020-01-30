import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql"
});

export const Provider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
