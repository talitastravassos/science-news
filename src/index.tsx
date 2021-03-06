import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import NewsProvider from "./context/NewsContext";
import News from "./views/news";
import Category from "./views/category";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <NewsProvider>
        <Route path="/" exact component={App} />
        <Route path="/page/:page" exact component={News} />
        <Route path="/category/:category/:page?" exact component={Category} />
      </NewsProvider>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
