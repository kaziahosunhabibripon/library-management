import React from 'react';
import { Card } from 'react-bootstrap';
import {  useHistory } from 'react-router-dom';

import './Book.css';

const Book = ({book}) => {
   
    const history = useHistory();
    const handleAddProduct = (_id)=>{
        history.push(`/checkout/${_id}`);
       
    }
    const {imageurl,Book_Name,Author_Name,Add_Price, _id} = book;
   
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
                    <button onClick={() => handleAddProduct(_id)}
                        className="btn btn-primary btn-buy">Buy Now</button>
            </div>
        </Card>
    );
};

export default Book;