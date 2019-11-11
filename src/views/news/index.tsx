import React from "react";
import styles from "./styles.module.scss";
import NewsList from "../../components/NewsList";
import Pagination from "../../components/Pagination";
import { RouteComponentProps } from "react-router-dom";

export default function News(props: RouteComponentProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LATEST NEWS ABOUT SCIENCE</h1>
      <NewsList />
      <Pagination {...props}/>
    </div>
  );
}
