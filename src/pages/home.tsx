import { useContext } from "react"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { ClimbingBoxLoader } from "react-spinners"
import { BookType, StoreType } from '../utils/types'
import { BookSearchContext } from "../utils/context"

export const Home = () => {
    const { count, fetchData, homeLoading, 
            setHomeLoading, setBook, scrollUpRef } = useContext(BookSearchContext)

    const { bookList, nextPage, previousPage } = useSelector((store: StoreType) => ({
        bookList: store.bookReducer.bookList,
        nextPage: store.bookReducer.nextPage,
        previousPage: store.bookReducer.previousPage
    }))

    const navigate = useNavigate()

    const handleClick = (book: BookType) => {
        setBook(book)
        navigate('description')
    }

    const handlePageChange = (page: string) => {
        setHomeLoading(true)
        fetchData(page)
        if (scrollUpRef.current) {
            scrollUpRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    

    return (
        <main className="main">
            { homeLoading ? <ClimbingBoxLoader
                            color={ '#18a7ad' }
                            size={ 40 }
                            cssOverride={{ margin: '200px auto' }}
                        /> : 
                <div>
                    <h2 className="books-count">{`found ${ count } books`}</h2>
                        <div className="books-container">
                        {
                            bookList.map((book: BookType) => {
                                return (
                                    <div onClick={() => handleClick(book)} className="book-container" key={book.id}>
                                        <div className="book-image-container">
                                            <img src={book.formats["image/jpeg"]} alt={book.title} />
                                        </div>
                                        <div className="book-container-data">
                                            <h3>{book.title}</h3>
                                            <p>{book.authors[0]?.name}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    <div className="button-container">
                        <button className="change-page-button" disabled={!previousPage} onClick={() => handlePageChange(previousPage)}>←</button>
                        <button className="change-page-button" disabled={!nextPage} onClick={() => handlePageChange(nextPage)}>→</button>
                    </div>
                </div>
            }
        </main>
    )
}