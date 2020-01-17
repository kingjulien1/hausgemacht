import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import Layout from "./layouts/Layout";
import Router from "./router";
import { client } from "./graphql";

const Hausgemacht = () => (
  <ApolloProvider client={client}>
    <Layout>
      <Router></Router>
    </Layout>
  </ApolloProvider>
);

ReactDOM.render(<Hausgemacht />, document.getElementById("root"));
