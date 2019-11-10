import React from "react";
import format from "date-fns/format";
import styles from "./styles.module.scss";
import { News } from "../../context/news.types";
interface Props {
  post: News;
}

export default function NewsCard({ post }: Props) {
  return (
    <div className={styles.card}>
      <img src={post.image} alt={post.title} className={styles.image}/>

      <div className={styles.text_container}>
        <p>{post.category}</p>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <div className={styles.flex_container}>
          <p>by: {post.author}</p>
          <p>{format(new Date(post.datetime), "MMMM dd, yyyy")}</p>
        </div>
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          Read all
        </a>
      </div>
    </div>
  );
}
