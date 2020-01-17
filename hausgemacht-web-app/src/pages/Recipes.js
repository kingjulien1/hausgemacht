import React from "react";
import { PageHeader, Layout } from "antd";
import { useQuery } from "@apollo/react-hooks";

import { ALL_RECIPES } from "../graphql/queries";
import { RecipeTable } from "../components/data-display/table";

export default function Recipes() {
  const { loading, error, data } = useQuery(ALL_RECIPES);
  return (
    <Layout.Content style={{ backgroundColor: "white" }}>
      <PageHeader
        title="Hausgemacht"
        subTitle="ein Platz für Familienrezepte"
      ></PageHeader>
      <RecipeTable
        loading={loading}
        error={error}
        recipes={data ? data.recipes : []}
      ></RecipeTable>
    </Layout.Content>
  );
}
