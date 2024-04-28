import React, { useEffect, useState } from "react";
import bookListData from "../data.json";
import BookList from "./BookList";

const App = () => {
    const [books, setBooks] = useState(bookListData["books"]);

    useEffect(() => {
        setBooks(bookListData["books"]);
    }, []);

    return (
        <div>
            <BookList books={books} />
        </div>
    )
}

export default App;