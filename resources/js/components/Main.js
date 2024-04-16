import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Box } from "@mui/system";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "../pages/home";

function Main() {
  return (
    <Box>
      <Navigation></Navigation>
      <Router>
        <main className={"m-5"}>
          <Switch>
            <Route path="/todo-app/public/" exact component={Home} />
          </Switch>
        </main>
      </Router>
    </Box>
  );
}

export default Main;
// for <div id="main-employee"></div>
ReactDOM.render(<Main />, document.getElementById("app"));
