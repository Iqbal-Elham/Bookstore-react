import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './books/booksSlice';
import categoriesSlice from './categories/categoriesSlice';

export const store = configureStore({
    reducer: {
        books: booksReducer,
        categories: categoriesSlice,
    }
})