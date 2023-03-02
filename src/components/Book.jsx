import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Book.module.css';

const Book = ({ title = '', author = '' }) => (
  <div className={styles.container}>
    <h1>{title}</h1>
    <p>{author}</p>
    <div className={styles.buttons}>
      <button type="button">Comments</button>
      <button type="button">Edit</button>
      <button type="button">Remove</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
