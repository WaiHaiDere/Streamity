import React from "react";
import { Route, Switch } from "react-router-dom";

import Frontpage from "../pages/Frontpage";
import JoinPage from "../pages/JoinPage";
import MediaSelectionPage from "../pages/MediaSelectionPage";

// This component allows for easy additions for additional pages
const paths = {
  FRONTPAGE: "/",
  JOIN: "/join",
  MEDIASELECTION: "/media",
};

const routes = (
  <Switch>
    <Route exact path={paths.FRONTPAGE} component={Frontpage} />
    <Route exact path={paths.JOIN} component={JoinPage} />
    <Route exact path={paths.MEDIASELECTION} component={MediaSelectionPage} />
  </Switch>
);

export default routes;
