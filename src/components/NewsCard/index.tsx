import React from "react";
import styles from './styles.module.scss';
interface Props {
  post: any;
}

export default function NewsCard({ post }: Props) {
  return (
    <div className={styles.card}>
      <h1>{post.title}</h1>
    </div>
  );
}
