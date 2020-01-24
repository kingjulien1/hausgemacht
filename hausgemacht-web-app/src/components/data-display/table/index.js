import React from "react";
import { Table, Result } from "antd";
import recipeCols from "./columns/recipe";
import ingredientCols from "./columns/ingredient";

export const RecipeTable = ({ loading, error, recipes }) =>
  error ? (
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
      onRow={({ _id }) => ({})}
    ></Table>
  );

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
      onRow={({ _id }) => ({})}
    ></Table>
  );
