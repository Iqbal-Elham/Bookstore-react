import React from 'react';
import Form from './Form';
import Book from './Book';

const Books = () => {
    return (
        <div>
            <Book title='The hunger Games' author="Suzanne Collins"/>
            <Form />
        </div>
    );
}

export default Books;
