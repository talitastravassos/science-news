import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { NewsContext } from "../../context/NewsContext";

export default function Navbar() {
  const {
    action: { setCategory, getNews }
  } = React.useContext(NewsContext); // context api

  const onClick = () => {
    setCategory("", "LATEST NEWS ABOUT SCIENCE")
    getNews()
  }
  return (
    <Link to="/" replace>
      <nav className={styles.navbar} onClick={onClick}>
        <h2>
          <strong>Science News</strong>
        </h2>
        <img
          src="https://image.flaticon.com/icons/svg/730/730771.svg"
          alt="Science News"
          width="40"
        />
      </nav>
    </Link>
  );
}
