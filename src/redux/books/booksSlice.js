import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allBooks: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.allBooks.push(action.payload);
    },
    removeBook: (state, action) => {
      const all = state.allBooks.filter((book) => book.id !== action.payload);
      return all;
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
