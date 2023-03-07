import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories : [],
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers : {
        status: (state) => {
            return 'Under Construction';
        }
    }
})

export default categoriesSlice.reducer;
export const { addBook } = categoriesSlice.actions;

