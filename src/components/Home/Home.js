import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Home.css';
const Home = () => {
    const [books, setBooks] = useState([]);
    const [orders, setOrders] = useState([]);
    const handleAddProduct=(book)=>{
        const newOrders = [...orders, book];
        console.log(book);
        setOrders(newOrders);
    }
   
    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res=>res.json())
        .then(data=>setBooks(data))
       
    }, [])
    return (
        <div className="row m-0 p-0">
            {
                books?.map(book=> <Book 
                    key={book._id} book={book} 
                    handleAddProduct={handleAddProduct}> 
                </Book>)
            }
            
        </div>
    );
};

export default Home;