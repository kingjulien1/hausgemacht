import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layouts/Layout";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Router from "./router";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql"
});

const Hausgemacht = () => (
  <ApolloProvider client={client}>
    <Layout>
      <Router></Router>
    </Layout>
  </ApolloProvider>
);

ReactDOM.render(<Hausgemacht />, document.getElementById("root"));
