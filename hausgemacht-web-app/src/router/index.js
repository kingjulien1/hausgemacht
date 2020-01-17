import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../pages/404NotFound";
import Recipes from "../pages/Recipes";
import Ingredients from "../pages/Ingredients";

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
        <Route path="/" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};
