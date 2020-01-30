import React from "react";
import ReactDOM from "react-dom";

import Layout from "./layouts/Layout";
import { Provider as ApolloProvider } from "./graphql";

const Hausgemacht = () => (
  <ApolloProvider>
    <Layout></Layout>
  </ApolloProvider>
);

ReactDOM.render(<Hausgemacht />, document.getElementById("root"));
