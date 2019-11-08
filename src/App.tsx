import React from "react";
import "./App.css";
import { NewsContext } from "./context/NewsContext";

const App = () => {
  const {
    action: { getNews }
  } = React.useContext(NewsContext); // context api

  React.useEffect(() => {
    getNews()
     // eslint-disable-next-line
  }, []);

  return <></>;
};

export default App;
