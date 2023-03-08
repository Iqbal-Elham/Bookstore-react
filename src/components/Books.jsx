import { useSelector } from 'react-redux';
import React from 'react';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const { allBooks } = useSelector((store) => store.books);
  return (
    <div>
      {allBooks.map((book) => {
        console.log(book.id);
        return (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        );
      })}

      <Form />
    </div>
  );
};

export default Books;
