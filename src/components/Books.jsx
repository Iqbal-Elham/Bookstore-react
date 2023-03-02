import React from 'react';
import Form from './Form';
import Book from './Book';

const Books = () => (
  <div>
    <Book title="The hunger Games" author="Suzanne Collins" />
    <Book title="Dune" author="Frank Herbert" />
    <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
    <Form />
  </div>
);

export default Books;
