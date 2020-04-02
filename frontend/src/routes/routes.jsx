import React from "react";
import { Route, Switch } from "react-router-dom";

import Frontpage from "../pages/Frontpage";

// This component allows for easy additions for additional pages
const paths = {
  FRONTPAGE: "/",
};

const routes = (
  <Switch>
    <Route exact path={paths.FRONTPAGE} component={Frontpage} />
  </Switch>
);

export default routes;
