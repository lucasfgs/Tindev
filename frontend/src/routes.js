import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";

const Routes = () => (
  <Router>
    <Route path="/" component={Login} exact />
    <Route path="/dev/:id" component={Main} />
  </Router>
);

export default Routes;
