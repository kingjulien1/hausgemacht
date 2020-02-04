import React from "react";
import { List } from "antd";
import { Link } from "react-router-dom";

export const RecipeList = ({ ingredients, _recipeId }) => (
  <List
    itemLayout="horizontal"
    dataSource={ingredients}
    footer={
      <Link to={`/recipes/${_recipeId}/ingredients`}>Zutaten Bearbeiten</Link>
    }
    style={{ padding: 50 }}
    renderItem={ingredient => (
      <List.Item key={ingredient._id}>
        <List.Item.Meta
          title={ingredient.title}
          description={`${ingredient.amount} ${ingredient.unit} of ${ingredient.title}`}
        ></List.Item.Meta>
      </List.Item>
    )}
  ></List>
);
