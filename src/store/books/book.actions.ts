import { ADD_BOOKS, NEXT_PAGE, PREVIOUS_PAGE } from "./books.types"
import { BookType } from "../../utils/types"


export const addBooks = ( list: BookType[] ) => {
    return{
        type: ADD_BOOKS,
        payload: list
    }
}

export const nextPageAction = ( link: string ) => {
    return {
        type: NEXT_PAGE,
        payload: link
    }
}

export const previousPageAction = ( link: string ) => {
    return {
        type: PREVIOUS_PAGE,
        payload: link
    }
}