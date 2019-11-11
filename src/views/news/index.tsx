import React from "react";
import styles from "./styles.module.scss";
import NewsList from "../../components/NewsList";
import Pagination from "../../components/Pagination";
import { RouteComponentProps } from "react-router-dom";
import { NewsContext } from "../../context/NewsContext";

export default function News(props: RouteComponentProps) {
  const {
    state: { news, titlePage },
    action: { getNews }
  } = React.useContext(NewsContext); // context api

  React.useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> {titlePage.toUpperCase()} </h1>
      <NewsList data={news} />
      <Pagination {...props} />
    </div>
  );
}
