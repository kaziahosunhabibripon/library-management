import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Book.css';

const Book = (book) => {
    const { Book_Name, imageurl, Author_Name, Add_Price } = book.book;
    const handleAddProduct = book.handleAddProduct;
    return (
        <Card className="col-md-4 card">
            <div className="img-part">
                <Card.Img variant="top" src={imageurl} />
            </div>
            <Card.Body>
                <Card.Title>{Book_Name}</Card.Title>
                <Card.Text>
                    {Author_Name}
                </Card.Text>
            </Card.Body>
            <div className="card-footer card-part">
                <h3> {Add_Price}</h3>
                <Link to='/order'>
                    <button onClick={() => handleAddProduct(book.book)}
                        className="btn btn-primary btn-buy">Buy Now</button>
                </Link>
            </div>
        </Card>
    );
};

export default Book;