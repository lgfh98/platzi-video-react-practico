import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../Home";
import Login from "@components/Login";
import Register from "@components/register";
import { NotFound } from "@components/NotFound";
import { Layout } from "@components/Layout";
import VideoPlayer from "@components/VideoPlayer";

const App = () => (
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/player/:id" component={VideoPlayer} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </HashRouter>
);

export { App };
