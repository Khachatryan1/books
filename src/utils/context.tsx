import { createContext, useRef, useState } from "react"
import { useDispatch } from 'react-redux'
import { ContextType, BookType } from "./types"
import { addBooks, nextPageAction, previousPageAction } from "../store/books/book.actions";
import axios from "axios"

export const BookSearchContext = createContext<ContextType>({
    book: null,
    setBook: () => {},
    homeLoading: false,
    setHomeLoading: () => {},
    loading: true,
    setLoading: () => {},
    count: 0,
    setCount: () => {},
    url: '',
    fetchData: () => {},
    scrollUpRef: { current: null }
})


export const BookSearchContextWrapper = ({ children }: { children: React.ReactNode }) => {
    const [book, setBook] = useState<BookType | null>()
    const [homeLoading, setHomeLoading] = useState(false)
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(0)
    const url = 'https://gutendex.com/books?page=1'

    const scrollUpRef = useRef(null)
    const dispatch = useDispatch()

    const fetchData = (url: string) => {
        axios.get(url)
            .then(res => {
                dispatch(addBooks(res.data.results))
                dispatch(nextPageAction(res.data.next))
                dispatch(previousPageAction(res.data.previous))
                setCount(res.data.count)
                setLoading(false)
                setHomeLoading(false)
            })
            .catch(error => {
                console.error('Error while receiving data:', error)
            })
    }
    
    const contextValue: ContextType = {
        book: book as BookType | null,
        setBook,
        homeLoading,
        setHomeLoading,
        loading,
        setLoading,
        count,
        setCount,
        url,
        fetchData,
        scrollUpRef
    }

    return (
        <BookSearchContext.Provider value={contextValue}>
            {children}
        </BookSearchContext.Provider>
    )
}