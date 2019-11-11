import React from "react";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <strong>Science News</strong> by{" "}
        <a
          href="https://github.com/talitastravassos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Talita S. Travassos
        </a>
        .
      </p>
    </footer>
  );
}
