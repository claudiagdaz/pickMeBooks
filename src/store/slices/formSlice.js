import { createSlice } from '@reduxjs/toolkit';
import { addBook } from './bookListSlice';


const formSlice = createSlice({
    name: 'form',
    initialState: {
        author: "",
        title: ""
    },
    reducers: {
        changeAuthor(state, action) {
            state.author = action.payload
        },
        changeTitle(state, action) {
            state.title = action.payload
        },
    },
    extraReducer(builder) {
        builder.addCase(addBook, (state, action) => {
            state.author = "";
            state.title = "";
        })
    }
});

export const { changeAuthor, changeTitle} = formSlice.actions;
export const formReducer = formSlice.reducer;