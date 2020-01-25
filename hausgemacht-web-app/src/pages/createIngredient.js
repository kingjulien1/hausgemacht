import React from "react";
import { Layout, PageHeader } from "antd";
import { useHistory } from "react-router-dom";
import Form from "../components/data-entry/createIngredient";

export default () => {
  const history = useHistory();
  return (
    <Layout style={{ background: "white" }}>
      <Layout.Content>
        <PageHeader
          title="Neue Zuatat"
          subTitle="neue Zutat zum Rezept hinzufügen"
          onBack={history.goBack}
        ></PageHeader>
        <div style={{ margin: "1rem" }}>
          <Form></Form>
        </div>
      </Layout.Content>
    </Layout>
  );
};
