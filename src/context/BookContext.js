import { createContext, useEffect, useState } from "react";
import bookListData from "../data.json";


export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState(bookListData["books"]);

    useEffect(() => {
        setBooks(bookListData["books"]);
    }, [])

    return (
        <BookContext.Provider value={books}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;