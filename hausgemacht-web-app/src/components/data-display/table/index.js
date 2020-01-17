import React from "react";
import { Table, Result } from "antd";
import columns from "./columns/recipe";

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
      columns={columns}
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
      columns={columns}
      loading={loading}
      dataSource={ingredients}
      onRow={({ _id }) => ({})}
    ></Table>
  );
