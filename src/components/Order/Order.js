import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { UserContext } from '../../App';


const Order = () => {
    const { email} = useParams();
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/order?email=' + loggedInUser.email)
    //     .then(res=>res.json())
    //     .then(data=>setOrders(data))
    // },[])
    
   
    return (
        <div>
            
            <h6>User Email :{loggedInUser.email}</h6>
            <h6>User Name :{loggedInUser.name}</h6>
            {/* {
                book?.map(order=> <li> { order.email} {order.productName} {(new Date(order.date).toDateString('dd/MM/yyyy'))}</li>)
            } */}
        </div>
    );
};

export default Order;