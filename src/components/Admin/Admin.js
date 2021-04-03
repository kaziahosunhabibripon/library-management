import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
const Admin = () => {
    const { register, handleSubmit } = useForm();
    const [imageurl, setImageUrl] = useState(null);

    const onSubmit = data => {
        const eventData = {
            Book_Name: data.Book_Name,
            Author_Name: data.Author_Name,
            Add_Price: data.Add_Price,
            imageurl: imageurl
        }
        const url = `http://localhost:5000/addBook`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log("server side", res));
    };
    const handleUploadImage = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '741942c124600179153ce48ab6bb9b81');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const [show, setShow] = useState(true);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [books])


    return (
        <div className="row m-0 p-0">
            <div className="col-md-4">
                <div className="sidenav">
                    <Link onClick={() => setShow(false)} to="/admin" ><FontAwesomeIcon icon={faThLarge} /> &nbsp; Manage books</Link>
                    <Link onClick={() => setShow(true)} to="/admin"><FontAwesomeIcon icon={faPlus} /> &nbsp; Add Book</Link>
                    <Link onClick={() => setShow(false)} to="/admin"><FontAwesomeIcon icon={faPencilAlt} /> &nbsp; Edit book</Link>
                </div>
            </div>
            {
                show ?
                    <div className="col-md-6">
                        <div className="form-upper">
                            <h1>Add book</h1>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-down" action="/addBook" method="POST">
                            <label htmlFor="Book Name"> Book Name </label>
                            <label htmlFor="Author Name"> Author Name </label>
                            <input name="Book_Name" placeholder="Enter Name" ref={register} />
                            <input name="Author_Name" placeholder="Enter Name" ref={register} />
                            <label htmlFor="Add Price"> Add Price </label>
                            <label htmlFor="Upload photo"> Add Book Cover Photo </label>
                            <input name="Add_Price" placeholder="Enter Price" ref={register} />
                            <input type="file" name="Upload_photo" onChange={handleUploadImage} id="Upload_photo" ref={register} />
                            <input type="submit" className="submit_button" />
                        </form>
                    </div>
                    : <div className="col-md-6">
                        <div className="form-upper">
                            <h1> Products List</h1>
                        </div>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th><h6> Book Name</h6> </th>
                                        <th><h6>Author Name</h6></th>
                                        <th><h6>Price</h6></th>
                                        <th><h6>Action</h6></th>
                                    </tr>
                                    <tr>
                                        <td>
                                            {
                                                books?.map(book => <h6 key={book._id}> {book.Book_Name} </h6>)
                                            }
                                        </td>
                                        <td>
                                            {
                                                books?.map(book => <h6 key={book._id}> {book.Author_Name} </h6>)
                                            }
                                        </td>
                                        <td>
                                            {
                                                books?.map(book => <h6 key={book._id}> {book.Add_Price} </h6>)
                                            }
                                        </td>
                                        <td>
                                            {
                                                books?.map(book => <h6 key={book._id}> Delete </h6>)
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div >
    );
};

export default Admin;