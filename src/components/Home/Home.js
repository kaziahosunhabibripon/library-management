import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Home.css';
import { CircularProgress } from '@material-ui/core';

const Home = () => {
    
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://secret-inlet-76223.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>setBooks(data))
       
    }, [])
   
  
    return (
        <div className="row m-0 p-0">
            {
                books === 0 && 
                <CircularProgress />
            
            }
            {
                books?.map(book=> <Book 
                    key={book._id} book={book} > 
                </Book>)
            }  
            
        </div>
    );
};

export default Home;