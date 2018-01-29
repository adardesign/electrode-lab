import React from "react";
import { Route } from "react-router";
import Home from "./components/home";
import About from "./components/about";

export const routes = (
    <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
)
