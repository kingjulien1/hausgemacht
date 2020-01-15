import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import NotFound from "../pages/404NotFound";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};
