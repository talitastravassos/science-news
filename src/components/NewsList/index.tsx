import React from "react";
import Loader from "react-loader-spinner";
import { NewsContext } from "../../context/NewsContext";
import NewsCard from "../NewsCard";
import { News } from "../../context/news.types";
import styles from "./styles.module.scss";

export default function NewsList() {
  const {
    state: { news, loading },
    action: { getNews }
  } = React.useContext(NewsContext); // context api

  React.useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.container}>
          <Loader type="TailSpin" color="#888888" height={150} width={150} />
        </div>
      ) : (
        news.map((post: News) => {
          return <NewsCard post={post} key={post.id} />;
        })
      )}
    </>
  );
}
