import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layouts/Layout";
import { ApolloProvider } from "@apollo/react-hooks";

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
