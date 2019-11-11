import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import NewsProvider from "./context/NewsContext";
import News from "./views/news";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <NewsProvider>
        <Route path="/" exact={true} component={App} />
        <Route path="/:page/" component={News} />
      </NewsProvider>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
