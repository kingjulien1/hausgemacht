import ApolloClient, { InMemoryCache } from "apollo-boost";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter } from "react-router-dom";
import Switch from "../router";

const cache = new InMemoryCache({ dataIdFromObject: o => o._id });

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache
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
