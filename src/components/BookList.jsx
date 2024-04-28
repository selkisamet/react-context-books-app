import React, { useContext } from "react";
import Book from "./Book";
import BookContext from "../context/BookContext";
import "./BookList.css";

const BookList = () => {
    const booksContext = useContext(BookContext);

    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">BOOK LIST</h2>
                    <h3 className="section-subheading text-muted">Book List Archive</h3>
                </div>
                <div className="row">
                    {
                        booksContext.map((book, index) => {
                            return <Book book={book} key={index} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BookList;

