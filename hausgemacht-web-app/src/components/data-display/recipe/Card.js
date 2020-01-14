import React from "react";
import { Card } from "antd";
import { CardLayout, CardsLayout } from "../../../layouts/Card";

const Recipe = ({ recipe }) => {
  return (
    <CardLayout>
      <Card
        cover={
          <img
            alt="kein Bild für dieses Rezept vorhanden"
            src="https://gamechangersmovie.com/wp-content/uploads/2019/09/recipes-header-1600x1066.jpg"
          ></img>
        }
      >
        <Card.Meta
          title={recipe.title}
          description={recipe.description}
        ></Card.Meta>
      </Card>
    </CardLayout>
  );
};

const Recipes = ({ recipes }) => {
  return (
    <CardsLayout>
      {recipes.map(recipe => (
        <Recipe recipe={recipe} key={recipe._id}></Recipe>
      ))}
    </CardsLayout>
  );
};

export { Recipe as Card, Recipes as Cards };
