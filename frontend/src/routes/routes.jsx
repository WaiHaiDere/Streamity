import React from "react";
import { Route, Switch } from "react-router-dom";

import Frontpage from "../pages/Frontpage";
import JoinPage from "../pages/JoinPage";
import MediaSelectionPage from "../pages/Creation";
import MediaViewPage from "../pages/MediaViewPage";

// This component allows for easy additions for additional pages
const paths = {
  FRONTPAGE: "/",
  JOIN: "/join",
  MEDIASELECTION: "/create",
  MEDIAVIEW: "/media",
};

const routes = (
  <Switch>
    <Route exact path={paths.FRONTPAGE} component={Frontpage} />
    <Route exact path={paths.JOIN} component={JoinPage} />
    <Route exact path={paths.MEDIASELECTION} component={MediaSelectionPage} />
    <Route exact path={paths.MEDIAVIEW} component={MediaViewPage} />
  </Switch>
);

export default routes;
