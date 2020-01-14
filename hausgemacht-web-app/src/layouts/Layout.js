import React from "react";
import { Layout, Typography } from "antd";

export default ({ children }) => {
  return (
    <Layout>
      <Layout.Header>
        <Typography.Title style={{ color: "white" }}>
          <span role="img" aria-label="hausgemacht">
            🍳
          </span>
        </Typography.Title>
      </Layout.Header>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
};
