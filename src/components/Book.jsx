import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './styles/Book.module.css';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <h1>{ title }</h1>
      <p>{ author }</p>
      <p>{ category }</p>
      <div className={styles.buttons}>
        <button type="button">Comments</button>
        <button type="button">Edit</button>
        <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
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
  category: PropTypes.string.isRequired,
};

export default Book;
