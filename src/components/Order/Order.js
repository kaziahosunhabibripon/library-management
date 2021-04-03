import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Order.css';
import { UserContext } from '../../App';


const Order = () => {

    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/order?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    return (
        <div className="row m-0 p-0">
            <h4 className="text-center m-2 py-2">Order Quantity: {orders.length}</h4>   
            {  
                orders?.map(order =>
                    <div className="col-md-5 py-1" key={order.email}> 
                        <ul className="text-left">
                            <li> <span> Order ID: {order._id}</span> </li>
                            <li> <span> Name: {order.name}</span> </li>
                            <li> <span> Email: {order.email}</span> </li>
                            <li> <span> Book Name: {order.Book_Name}</span> </li>
                            <li> <span> Author Name: {order.Author_Name}</span> </li>
                            <li> <span> Price: {order.Add_Price}</span> </li>
                            <li> <span> Date and Time : {(new Date(order.checkIn).toString())}</span> </li>
                        </ul>
                    </div>)
               }
            
        </div>
    );
};

export default Order;