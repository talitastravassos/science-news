import React from "react";
import styles from "./styles.module.scss";
import NewsList from "../../components/NewsList";
import Pagination from "../../components/Pagination";
import { RouteComponentProps } from "react-router-dom";
import { NewsContext } from "../../context/NewsContext";
import Footer from "../../components/Footer";

export default function Category(props: RouteComponentProps) {
  const {
    state: { news, titlePage, currentPage, currentCategory },
    action: { getCategory }
  } = React.useContext(NewsContext); // context api

  React.useEffect(() => {
    getCategory();
    // eslint-disable-next-line
  }, []);

  const controls = (page: number) => {
    getCategory(page)
  }

  React.useEffect(() => {
    if (currentPage !== 1){
     props.history.push({
        pathname: `/category/${currentCategory}/${currentPage}`
      });
    }
     // eslint-disable-next-line
  }, [currentPage]);


  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}> {titlePage.toUpperCase()} </h1>
        <NewsList data={news} />
        <Pagination controls={controls} />
      </div>
      <Footer />
    </>
  );
}