import { ADD_BOOKS, NEXT_PAGE, PREVIOUS_PAGE } from "./books.types"
import { ActionType } from "../../utils/types"

const initialState = {
    bookList: [],
    nextPage: '',
    previousPage: ''
}


export const bookReducer = (state = initialState, action: ActionType) => {
    switch (action.type){
        case ADD_BOOKS:
            return {
                ...state,
                bookList: action.payload
            }

        case NEXT_PAGE:
            return {
                ...state,
                nextPage: action.payload
            }

        case PREVIOUS_PAGE:
            return {
                ...state,
                previousPage: action.payload
            }
            
        default:
            return state
    }
}