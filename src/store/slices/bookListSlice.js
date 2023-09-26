import { createSlice, nanoid } from '@reduxjs/toolkit';

export const bookListSlice = createSlice({
    name: 'bookList',
    initialState: {
        bookList: []
    },
    reducers: {
        addBook(state, action){
            //Assumption = action.payload = { author: "xyz", title: "asd"}
            state.bookList.push({
                author: action.payload.author,
                title: action.payload.title,
                id: nanoid()
            })
        }

    }
});

export const { addBook } = bookListSlice.actions;
export const bookListReducer = bookListSlice.reducer;
