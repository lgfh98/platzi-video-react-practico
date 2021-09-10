import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "../Home";
import { Login } from "@components/Login";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </BrowserRouter>
);

export { App };
