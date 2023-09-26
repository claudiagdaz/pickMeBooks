import { configureStore } from '@reduxjs/toolkit';
import { changeAuthor, changeTitle, formReducer } from './slices/formSlice';
import { addBook, bookListReducer } from './slices/bookListSlice';

const store = configureStore({
    reducer: {
        form: formReducer,
        bookList: bookListReducer
    }
})

export {
    store,
    changeAuthor,
    changeTitle,
    addBook
}