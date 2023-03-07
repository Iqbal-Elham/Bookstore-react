import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allBooks : [],
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers : {
        addBook: (state) => {
            state.allBooks += 1
        },
        removeBook: (state) => {
            state.allBooks -= 1
        }
    }
})

export default booksSlice.reducer;
export const { addBook, removeBook} = booksSlice.actions;

