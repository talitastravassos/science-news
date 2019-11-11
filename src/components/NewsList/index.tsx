import React from "react";
import Loader from "react-loader-spinner";
import { NewsContext } from "../../context/NewsContext";
import NewsCard from "../NewsCard";
import { News } from "../../context/news.types";
import styles from "./styles.module.scss";

interface Props {
  data: News[];
}

export default function NewsList({ data }: Props) {
  const {
    state: { loading }
  } = React.useContext(NewsContext); // context api

  return (
    <>
      {loading ? (
        <div className={styles.container}>
          <Loader type="TailSpin" color="#888888" height={150} width={150} />
        </div>
      ) : (
        data.map((post: News) => {
          return <NewsCard post={post} key={post.id} />;
        })
      )}
    </>
  );
}
