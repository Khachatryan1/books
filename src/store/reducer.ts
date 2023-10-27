import { combineReducers } from "redux"
import { bookReducer } from "./books/books.reducer"


export const reducer = combineReducers({
    bookReducer: bookReducer,
})