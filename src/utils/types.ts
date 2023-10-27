export type BookType = {
    authors: [{
        name: string
        birth_year: number
        death_year: number
    }]
    bookshelves: []
    copyright: boolean
    download_count: number
    formats: {
        'image/jpeg': string
    }
    id: number
    languages: string[]
    media_type: string
    subjects: string[]
    title: string
    translators: []
}

export type ActionType = {
    type: string
    payload: BookType[]
}

export type StoreType = {
    bookReducer: {
        bookList: BookType[]
        nextPage: string
        previousPage: string
    }
}

export type ContextType = {
    book: BookType | null
    setBook: React.Dispatch<React.SetStateAction<BookType | null | undefined>>
    homeLoading: boolean
    setHomeLoading: React.Dispatch<React.SetStateAction<boolean>>
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
    url: string
    fetchData: (url: string) => void
    scrollUpRef: React.MutableRefObject<HTMLHeadingElement  | null>
}