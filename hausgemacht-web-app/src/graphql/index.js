import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter } from "react-router-dom";
import Switch from "../router";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql"
});

export const Provider = ({ children }) => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Switch>{children}</Switch>
      </ApolloProvider>
    </BrowserRouter>
  );
};
