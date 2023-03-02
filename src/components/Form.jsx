import React from 'react';
import styles from './styles/Form.module.css';

const Form = () => (
  <>
    <div className={styles.container}>
      <hr />
      <h2>Add New Book</h2>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Book Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  </>
);

export default Form;
