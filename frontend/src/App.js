import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/styles";
import routes from "./routes/routes";
import GlobalStateProvider from "./hooks/GlobalState/GlobalStateProvider";

function App() {
  return (
    <StylesProvider injectFirst>
      <GlobalStateProvider>
        <Router>
          <div className="App">{routes}</div>
        </Router>
      </GlobalStateProvider>
    </StylesProvider>
  );
}

export default App;
