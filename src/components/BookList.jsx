import React from "react";
import Book from "./Book";
import "./BookList.css";

const BookList = ({ books }) => {
    console.log(books);

    const bookList = books.map((book, index) => {
        return <Book book={book} key={index} />
    })

    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">BOOK LIST</h2>
                    <h3 className="section-subheading text-muted">Book List Archive</h3>
                </div>
                <div className="row">
                    {bookList}
                </div>
            </div>
        </section>
    )
}

export default BookList;

