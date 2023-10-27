import {useContext} from 'react'
import { useNavigate } from "react-router"
import { BookSearchContext } from "../utils/context"

export const Description = () => {
    const navigate = useNavigate()
    const { book, fetchData, url, setHomeLoading } = useContext(BookSearchContext)
    
    const goHome = () => {
        fetchData(url)
        setHomeLoading(true)
        navigate('/')
    }

    return (
        <div className="description">
            <div className="description-image-container">
                <img src={book?.formats["image/jpeg"]} alt={book?.title} />
            </div>
            <div className="description-data">
                <h2 className="data-title">{book?.title}</h2>
                <p className="data-details">Authors: <span>{book?.authors?.map(author => author.name + ', ')}</span></p>
                <p className="data-details">Available languages: <span>{book?.languages?.map(language => language + ', ')}</span></p>
                <p className="data-details">Translators: <span>{book?.translators?.map(translator => translator + ', ')}</span></p>
                <p className="data-details">Subjects: <span>{book?.subjects?.map(subject => subject + ', ')}</span></p>
                <p className="data-details">Bookshelves: <span>{book?.bookshelves?.map(genre => genre + ', ')}</span></p>
                <p className="data-details">Download count: <span>{book?.download_count}</span></p>
                <button className="home-button" onClick={goHome}>home</button>
            </div>
        </div>
    )
}