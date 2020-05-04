import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./pages";
import Login from "./pages/Login";

import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Login path="/login" component={Login} />
    </Switch>
  );
};

export default App;
