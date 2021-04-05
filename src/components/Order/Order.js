import React, { useContext, useEffect, useState } from 'react';
import './Order.css';
import { UserContext } from '../../App';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {   
        fetch('http://localhost:5000/orders' )
        // + loggedInUser.email,{
        //     method:'GET',
        //     headers:{
        //         'content-type': 'application/json',
        //         authorization : `Bearer ${sessionStorage.getItem('token')}`
        //     }
        // })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
   


    return (
        <div className="row m-0 p-0">
           <div className="col-md-8">
                <h4 className="text-center m-2 py-2">Order Quantity: {orders.length}</h4>   
           </div>
            {  
                orders?.map(order =>
                    <div className="col-md-8" key={order._id}> 
                        <ul className="orderDiv"> 
                            <li>  Name: {order.name}</li>
                            <li>  Email: {order.email} </li>
                            <li> Book Name: {order.Book_Name} </li>
                            <li>  Author Name: {order.Author_Name} </li>
                            <li>  Price: {order.Add_Price} </li>
                            <li>  Date and Time : {(new Date(order.checkIn).toString())} </li>
                        </ul>
                    </div>)
               }
            
        </div>
    );
};

export default Order;