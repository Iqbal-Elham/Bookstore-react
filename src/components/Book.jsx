import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './styles/Book.module.css';
import { removeBook, deleteBook } from '../redux/books/booksSlice';
import progress from './styles/progress.png';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.bookInfo}>
        <div className="info">
          <h1>{title}</h1>
          <p>{author}</p>
        </div>
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
      <div className={styles.right}>
        <div className={styles.progress}>
          <img src={progress} alt="progress-img" width="90" />
          <div>
            <h2>64%</h2>
            <p>completed</p>
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.updateProgress}>
          <p>CURRENT CHAPTER</p>
          <h2>Chapter 17</h2>
          <button type="button">UPDATE PROGRESS</button>
        </div>
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
