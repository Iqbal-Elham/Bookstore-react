import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './styles/Book.module.css';
import { removeBook, deleteBook } from '../redux/books/booksSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{author}</p>
      <div className={styles.buttons}>
        <button type="button">Comments</button>
        <button type="button">Edit</button>
        <button
          type="button"
          onClick={() => {
            dispatch(removeBook(id));
            dispatch(deleteBook(id));
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

Book.defaultProps = {
  id: '',
};

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
