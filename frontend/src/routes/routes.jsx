import React from "react";
import { Route, Switch } from "react-router-dom";

import Frontpage from "../pages/Frontpage";
import JoinPage from "../pages/JoinPage";
import MediaSelectionPage from "../pages/Creation";
import MediaViewPage from "../pages/MediaViewPage";
import BufferPage from "../pages/BufferPage";
import ErrorPage from "../pages/ErrorPage";

// This component allows for easy additions for additional pages
const paths = {
  FRONTPAGE: "/",
  JOIN: "/join",
  MEDIASELECTION: "/create",
  MEDIAVIEW: "/media",
  BUFFERPAGE: "/buffer",
  ERRORPAGE: "/error",
};

const routes = (
  <Switch>
    <Route exact path={paths.FRONTPAGE} component={Frontpage} />
    <Route exact path={paths.JOIN} component={JoinPage} />
    <Route exact path={paths.MEDIASELECTION} component={MediaSelectionPage} />
    <Route exact path={paths.MEDIAVIEW} component={MediaViewPage} />
    <Route exact path={paths.BUFFERPAGE} component={BufferPage} />
    <Route exact path={paths.ERRORPAGE} component={ErrorPage} />
  </Switch>
);

export default routes;
