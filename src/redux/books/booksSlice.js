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
    removeBook: (state, action) => state.allBooks.filter((book) => book.id !== action.payload),
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
