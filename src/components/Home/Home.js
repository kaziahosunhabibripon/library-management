import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Home.css';
const Home = () => {
    const [books, setBooks] = useState([]);
    
   
    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res=>res.json())
        .then(data=>setBooks(data))
       
    }, [])
    return (
        <div className="row m-0 p-0">
            {
                books?.map(book=> <Book 
                    key={book._id} book={book} > 
                </Book>)
            }  
            
        </div>
    );
};

export default Home;