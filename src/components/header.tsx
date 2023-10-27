import { ChangeEvent, useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { FaSearch } from 'react-icons/fa'
import { BookSearchContext } from '../utils/context'


export const Header = () => {
    const [searchText, setSearchText] = useState('')
    const { setHomeLoading, url, fetchData, scrollUpRef } = useContext(BookSearchContext)

    const navigate = useNavigate()

    const handleSearch = (searchText: string) => {
        const url = `https://gutendex.com/books?search=${searchText}`

        setSearchText('')
        setHomeLoading(true)
        navigate('/')
        fetchData(url)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    
    const handleSettingsChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        const id = event.target.id

        setHomeLoading(true)
        navigate('/')

        if (id === 'lang' && value !== 'all') {
            const url = `https://gutendex.com/books?languages=${value}&page=1`
            
            fetchData(url)
        } else if (id === 'category' && value !== 'all') {
            const url = `https://gutendex.com/books?topic=${value}&page=1`

            fetchData(url)
        } else {
            fetchData(url)
        }
    }

    return (
        <header className='header'>
            <div className="overlay"></div>
            <div className="header-content">
                <h1 ref={scrollUpRef}>Search for books</h1>
                <FaSearch className='search-icon' onClick={() => handleSearch(searchText)}/>
                <input className='search-field' type="text" value={searchText} placeholder="author's name or book title" onChange={handleChange}/>
                <div className='settings'>
                    <div>
                        <p>select language</p>
                        <select onChange={handleSettingsChange} className='select' name="lang" id="lang">
                            <option value='all'>All</option>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="fi">Finnish</option>
                        </select>
                    </div>
                    <div>
                        <p>select category</p>
                        <select onChange={handleSettingsChange} className='select' name="category" id="category">
                            <option value='all'>All</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Drama">Drama</option>
                            <option value="Children">Children</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}