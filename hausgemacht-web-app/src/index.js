import React from "react";
import ReactDOM from "react-dom";

import Layout from "./layouts/Layout";
import Router from "./router";
import { Provider as ApolloProvider } from "./graphql";

const Hausgemacht = () => (
  <ApolloProvider>
    <Layout>
      <Router></Router>
    </Layout>
  </ApolloProvider>
);

ReactDOM.render(<Hausgemacht />, document.getElementById("root"));
