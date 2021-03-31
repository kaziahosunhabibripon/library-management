
import React from 'react';
import { Card } from 'react-bootstrap';
import './Book.css';

const Book = ({ book }) => {
    console.log(book);
    const { Book_Name, imageurl, Author_Name, Add_Price } = book;
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
                   &nbsp;<button className="btn btn-primary">Buy Now</button>
                </div>
            </Card>
    );
};

export default Book;