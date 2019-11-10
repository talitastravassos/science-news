import React from "react";
import { NewsContext } from "../../context/NewsContext";
import NewsCard from "../NewsCard";
import styles from './styles.module.scss';
import { News } from "../../context/news.types";

export default function NewsList() {
  const {
    state: { news },
    action: { getNews }
  } = React.useContext(NewsContext); // context api

  React.useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      {news.map((post: News) => {
        return <NewsCard post={post} key={post.id} />;
      })}
    </div>
  );
}
