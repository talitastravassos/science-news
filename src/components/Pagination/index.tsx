import React from "react";
import styles from "./styles.module.scss";
import { NewsContext } from "../../context/NewsContext";

interface Props {
  pagination(page: number): void;
}

export default function Pagination({ pagination }: Props) {
  const {
    state: { currentPage }
  } = React.useContext(NewsContext); // context api


  return (
    <div className={styles.container}>
      {currentPage === 1 ? (
        <></>
      ) : (
        <button className="ui button big" onClick={() => pagination(currentPage - 1)}>
          Last Page
        </button>
      )}

      <button className="ui button big" onClick={() => pagination(currentPage + 1)}>
        Next Page
      </button>
    </div>
  );
}
