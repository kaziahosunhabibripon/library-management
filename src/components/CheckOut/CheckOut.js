import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CheckOut.css';
const CheckOut = () => {
    const { _id } = useParams();
    const [book, setBook] = useState({});
    useEffect(() => {
        const url = (`http://localhost:5000/books/${_id}`)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBook(data);
                console.log(data);
            })

    }, [])

    return (
        <div className="row">
            <div className="col-md-6">
                <h2>Checkout</h2>
                <table>
                    <tbody>
                        <tr>
                            <th><h6> Description</h6> </th>
                            <th><h6>Quantity</h6></th>
                            <th><h6>Price</h6></th>
                        </tr>
                        <tr>
                            <td><h6>{book.Book_Name}</h6></td>
                            <td><h6>1</h6></td>
                            <td><h6>{book.Add_Price}</h6></td>
                        </tr>
                        <tr>
                            <td><h6>Total</h6></td>
                            <td><h6>1</h6></td>
                            <td><h6>{book.Add_Price}</h6></td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary btn-checkout">Checkout</button>
            </div>
        </div>
    );
};

export default CheckOut;