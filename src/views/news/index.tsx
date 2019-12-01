import React from "react";
import styles from "./styles.module.scss";
import NewsList from "../../components/NewsList";
import Pagination from "../../components/Pagination";
import { RouteComponentProps } from "react-router-dom";
import { NewsContext } from "../../context/NewsContext";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function News(props: RouteComponentProps) {
  const {
    state: { news, titlePage, currentPage },
    action: { getNews }
  } = React.useContext(NewsContext); // context api

  React.useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  const controls = (page: number) => {
    getNews(page);
  };

  React.useEffect(() => {
    if (currentPage !== 1) {
      props.history.push({
        pathname: `/page/${currentPage}`
      });
    }
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <>
      <Navbar />
      <div className={styles.container_page}>
        <div className={styles.container_news}>
          <h1 className={styles.title}> {titlePage.toUpperCase()} </h1>
          <NewsList data={news} />
          <Pagination controls={controls} />
        </div>
        <Footer />
      </div>
    </>
  );
}
