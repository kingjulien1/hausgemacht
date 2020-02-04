import React from "react";
import { Layout, PageHeader } from "antd";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Layout.Content>
        <PageHeader
          title="Hausgemacht"
          subTitle="Ein Platz für Familienrezepte"
        ></PageHeader>
        <Link to="/recipes">Rezepte</Link>
      </Layout.Content>
    </Layout>
  );
};
