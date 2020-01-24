import React from "react";
import { PageHeader, Layout } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { useParams, useHistory } from "react-router-dom";

import { RECIPE } from "../graphql/queries";
import { IngredientTable } from "../components/data-display/table";

export default function Ingredients() {
  const { _recipeId } = useParams();
  const { loading, error, data } = useQuery(RECIPE, {
    variables: { _id: _recipeId }
  });
  const history = useHistory();

  return (
    <Layout.Content style={{ backgroundColor: "white" }}>
      <PageHeader
        title="Zutaten"
        subTitle={`Zutaten für das Rezept`}
        onBack={history.goBack}
      ></PageHeader>
      <IngredientTable
        loading={loading}
        error={error}
        ingredients={data ? data.recipe[0].ingredients : []}
      ></IngredientTable>
    </Layout.Content>
  );
}
