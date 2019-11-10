import React from "react";
import "./App.scss";
import NewsList from "./components/NewsList";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">LATEST NEWS ABOUT SCIENCE</h1>
      <NewsList />
    </div>
  );
};

export default App;
