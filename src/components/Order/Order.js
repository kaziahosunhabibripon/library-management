import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';


const Order = () => {
    const [orders,setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch('http://localhost:5000/order?email=' + loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    
   
    return (
        <div>
            <h6>You have :{orders.length}</h6>
            {
                orders?.map(order=> <li> { order.email} {order.productName} {(new Date(order.date).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Order;