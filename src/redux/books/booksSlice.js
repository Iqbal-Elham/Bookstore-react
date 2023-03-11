import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const key = 'VsRDlGcuDfqVocRsOBW9';
const initialState = {
  allBooks: [],
  isLoading: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async (name, thunkAPI) => {
  try {
    const resp = await fetch(`${baseUrl}/apps/${key}/books`);
    const data = await resp.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const postBook = createAsyncThunk('book/postBook', async (book) => {
  const resp = await fetch(`${baseUrl}/apps/${key}/books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: '',
    }),
  });

  return resp.json();
});

export const deleteBook = createAsyncThunk('book/deleteBook', async (id) => {
  const resp = await fetch(`${baseUrl}/apps/${key}/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await resp.json();
  return data;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      allBooks: [...state.allBooks, action.payload],
    }),
    removeBook: (state, action) => {
      const all = state.allBooks.filter((book) => book.id !== action.payload);
      return {
        ...state,
        allBooks: all,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      const books = Object.entries(action.payload).map((book) => ({
        id: book[0],
        ...book[1][0],
      }));
      return { ...state, allBooks: books };
    });
    builder.addCase(postBook.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(postBook.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(deleteBook.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(deleteBook.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
