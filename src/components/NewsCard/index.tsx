import React from "react";
import styles from './styles.module.scss';
import { News } from "../../context/news.types";
interface Props {
  post: News;
}

export default function NewsCard({ post }: Props) {
  return (
    <div className={styles.card}>
      <h1>{post.title}</h1>
    </div>
  );
}
