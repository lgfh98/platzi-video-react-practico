import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Login } from "@components/Login";
import { Register } from "@components/register";
import { NotFound } from "@components/NotFound";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export { App };
