import React, { useContext, useEffect, useState } from 'react';
import './Order.css';
import { UserContext } from '../../App';
const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        
        fetch('http://localhost:5000/order?email=' + loggedInUser.email,{
            method:'GET',
            headers:{
                'content-type': 'application/json',
                authorization : `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])
   


    return (
        <div className="row m-0 p-0">
            <h4 className="text-center m-2 py-2">Order Quantity: {orders.length}</h4>   
            {  
                orders?.map(order =>
                    <div className="col-md-5 py-1" key={order._id}> 
                        <ul className="text-left">
                           
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