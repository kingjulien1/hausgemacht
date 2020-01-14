import React from "react";
import ReactDOM from "react-dom";
import Landing from "./pages/Landing";
import Layout from "./layouts/Layout";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql"
});

const Hausgemacht = () => (
  <ApolloProvider client={client}>
    <Layout>
      <Landing></Landing>
    </Layout>
  </ApolloProvider>
);

ReactDOM.render(<Hausgemacht />, document.getElementById("root"));
