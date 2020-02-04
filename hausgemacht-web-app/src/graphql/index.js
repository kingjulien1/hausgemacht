import React from "react";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter } from "react-router-dom";
import Switch from "../router";

const cache = new InMemoryCache({ dataIdFromObject: o => o._id });
const link = createUploadLink({ uri: "http://localhost:4000/graphql" });

const client = new ApolloClient({
  link,
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
