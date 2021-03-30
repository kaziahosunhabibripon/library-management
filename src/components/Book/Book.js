import React from 'react';
import './Book.css';

const Book = ({book}) => {
    return (
        <div className="col-md-4 bookDiv">
            <img src={book.imageurl} alt=""/>
            <h3>{book.Book_Name}</h3>
        </div>
    );
};

export default Book;