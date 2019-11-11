import React from "react";
import "./App.scss";
import News from "./views/news";
import { RouteComponentProps } from "react-router-dom";

export default function App(props: RouteComponentProps) {
  return <News {...props} />;
}
