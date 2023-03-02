import React from "react";
import styles from "./styles/Book.module.css";

const Book = ({ title, author }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{author}</p>
      <div className={styles.buttons}>
        <button>Comments</button>
        <button>Edit</button>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default Book;
