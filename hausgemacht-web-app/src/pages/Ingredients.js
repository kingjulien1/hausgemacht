import React from "react";
import { PageHeader, Layout } from "antd";
import { useQuery } from "@apollo/react-hooks";

import { ALL_RECIPES } from "../graphql/queries";
import { IngredientTable } from "../components/data-display/table";

export default function Ingredients({ match }) {
  const { _recipeId } = match.params;
  const { loading, error, data } = useQuery(ALL_RECIPES);
  return (
    <Layout.Content style={{ backgroundColor: "white" }}>
      <PageHeader
        title="Zutaten"
        subTitle={`Zutaten für das Rezept`}
      ></PageHeader>
      <IngredientTable
        loading={loading}
        error={error}
        recipes={data ? data.recipes : []}
      ></IngredientTable>
    </Layout.Content>
  );
}
