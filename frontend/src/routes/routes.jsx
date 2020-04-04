import React from "react";
import { Route, Switch } from "react-router-dom";

import Frontpage from "../pages/Frontpage";
import JoinPage from "../pages/JoinPage";

// This component allows for easy additions for additional pages
const paths = {
  FRONTPAGE: "/",
  JOIN: "/join",
};

const routes = (
  <Switch>
    <Route exact path={paths.FRONTPAGE} component={Frontpage} />
    <Route exact path={paths.JOIN} component={JoinPage} />
  </Switch>
);

export default routes;
