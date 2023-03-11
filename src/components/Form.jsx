import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles/Form.module.css';
import { postBook, addBook } from '../redux/books/booksSlice';

const { v4: uuidv4 } = require('uuid');

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      title,
      author,
      category: '',
    };
    dispatch(addBook(data));
    dispatch(postBook(data));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <div className={styles.container}>
        <hr />
        <h2>ADD NEW BOOK</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
};

export default Form;
