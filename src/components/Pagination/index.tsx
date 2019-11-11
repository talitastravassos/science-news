import React from "react";
import styles from "./styles.module.scss";
import { NewsContext } from "../../context/NewsContext";
import { RouteComponentProps } from "react-router-dom";

export default function Pagination({ history }: RouteComponentProps) {
  const {
    state: { currentPage },
    action: { getNews }
  } = React.useContext(NewsContext); // context api

  const nextPage = () => {
    getNews(currentPage + 1);
  };

  const lastPage = () => {
    getNews(currentPage - 1);
  };

  React.useEffect(() => {
    history.push({
      pathname: `/page/${currentPage}`
    });
     // eslint-disable-next-line
  }, [currentPage]);

  return (
    <div className={styles.container}>
      {currentPage === 1 ? (
        <></>
      ) : (
        <button className="ui button big" onClick={lastPage}>
          Last Page
        </button>
      )}

      <button className="ui button big" onClick={nextPage}>
        Next Page
      </button>
    </div>
  );
}
