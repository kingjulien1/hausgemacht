import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../pages/404NotFound";
import Recipes from "../pages/Recipes";
import Ingredients from "../pages/Ingredients";
import createRecipe from "../pages/createRecipe"
import createIngredient from "../pages/createIngredient"

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Recipes}></Route>
        <Route
          path="/ingredients/:_recipeId"
          exact
          component={Ingredients}
        ></Route>
        <Route path="/create_recipe" exact component={createRecipe}></Route>
        <Route
          path="/create_ingredient/:_recipeId"
          exact
          component={createIngredient}
        ></Route>
        <Route path="/" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};
