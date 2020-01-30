import React from "react";
import { Table, Result } from "antd";
import recipeCols from "./columns/recipe";
import ingredientCols from "./columns/ingredient";
import { useHistory } from "react-router-dom";

export const RecipeTable = ({ loading, error, recipes }) => {
  const history = useHistory();
  return error ? (
    <Result
      status="error"
      title="Upps"
      subTitle={`Rezepte konnten nicht geladen werden: ${error}`}
    ></Result>
  ) : (
    <Table
      rowKey="_id"
      columns={recipeCols}
      loading={loading}
      dataSource={recipes}
      onRow={({ _id }) => ({ onClick: () => history.push(`recipe/${_id}`) })}
    ></Table>
  );
};

export const IngredientTable = ({ loading, error, ingredients }) =>
  error ? (
    <Result
      status="error"
      title="Upps"
      subTitle={`Zutaten konnten nicht geladen werden: ${error}`}
    ></Result>
  ) : (
    <Table
      rowKey="_id"
      columns={ingredientCols}
      loading={loading}
      dataSource={ingredients}
    ></Table>
  );
