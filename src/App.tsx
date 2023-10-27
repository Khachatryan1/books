import './assets/styles/style.scss'
import { useEffect, useContext } from 'react'
import { Routes, Route } from 'react-router'
import { NotFound } from './pages/notFound'
import { Home } from './pages/home'
import { Description } from './pages/description'
import { Header } from './components/header'
import { ClimbingBoxLoader } from 'react-spinners'
import { BookSearchContext } from './utils/context'

function App() {
    const { fetchData, url, loading } = useContext(BookSearchContext)

    useEffect(() => {
        fetchData(url)
    }, [])

    return (
        <div className='app'>
            {   loading ?   <ClimbingBoxLoader
                            color={ '#18a7ad' }
                            size={ 40 }
                            cssOverride={{ margin: '200px auto' }}
                        /> : 
                <div>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='description' element={<Description/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            }
        </div>
    );
}

export default App;
