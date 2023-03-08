import { createSlice } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

const initialState = {
  allBooks: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => (
      { ...state, allBooks: [...state.allBooks, action.payload] }
    ),
    removeBook: (state, action) => {
      const all = state.allBooks.filter((book) => book.id !== action.payload);
      return {
        ...state,
        allBooks: all,
      };
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
