import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Book from "../book/Book";

const Books = ({ bookDetails }) => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('../../../public/books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }
        , []);

    return (
        <div>
            <h2 className="text-center mb-16 font-bold font-playfairDisplay text-[53px] text-[#131313]">Books</h2>

            <div className="grid col-span-1 lg:grid-cols-3 gap-6 mb-24">
                {
                    books.map(book => <Book book={book} key={book.bookId} bookDetails={bookDetails}></Book>)
                }
            </div>

        </div>
    );
};

Books.propTypes = {
    bookDetails: PropTypes.func
}

export default Books;