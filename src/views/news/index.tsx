import React from "react";
import styles from "./styles.module.scss";
import NewsList from "../../components/NewsList";

export default function News() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LATEST NEWS ABOUT SCIENCE</h1>
      <NewsList />
    </div>
  );
}
