import React from "react";
import format from "date-fns/format";
import styles from "./styles.module.scss";
import { News } from "../../context/news.types";
import { NewsContext } from "../../context/NewsContext";
import { Link } from "react-router-dom";
interface Props {
  post: News;
}

export default function NewsCard({ post }: Props) {
  const {
    action: { setCategory }
  } = React.useContext(NewsContext); // context api

  const onClickCategory = () => {
    setCategory(post.category_tag, post.category);
  };

  return (
    <div className={styles.card}>
      <img src={post.image} alt={post.title} className={styles.image} />

      <div className={styles.text_container}>
        <Link to={`/category/${post.category_tag}`} replace>
          <p className={styles.category} onClick={onClickCategory}>
            {post.category.toUpperCase()}
          </p>
        </Link>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.paragraph}>{post.summary}</p>
        <div className={styles.flex_container}>
          <p>by {post.author}</p>
          <p>{format(new Date(post.datetime), "MMMM dd, yyyy")}</p>
        </div>
        <a
          className="ui fluid button large"
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          READ ALL
        </a>
      </div>
    </div>
  );
}
