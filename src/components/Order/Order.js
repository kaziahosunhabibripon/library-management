import { CircularProgress } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../App';
import './Order.css';





const Order = () => {
  
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/order?email='+loggedInUser.email,{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [loggedInUser.email])

   
    return (
        <div className="row m-0 p-0">
            <div className="col-md-8">
                <h4 className="text-center m-2 py-2"> Order Quantity: {orders.length} </h4>
                {
                    orders.length === 0 && <CircularProgress />
                }
                {
                    orders?.map(order =>
                        <ul className="orderDiv" key={order._id}>
                            <li>  Name: {order.name}</li>
                            <li>  Email: {order.email} </li>
                            <li> Book Name: {order.Book_Name} </li>
                            <li>  Author Name: {order.Author_Name} </li>
                            <li>  Price: {order.Add_Price} </li>
                            <li>  Date and Time : {(new Date(order.checkIn).toString())} </li>
                        </ul>

                    )}
            </div>
        </div>
    );
};

export default Order;