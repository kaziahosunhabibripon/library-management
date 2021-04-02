import axios from 'axios';
import React, { useState } from 'react';
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
        console.log(eventData);

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
    return (
        <div className="row m-0 p-0">
            <div className="col-md-4">
                <div className="sidenav"> 
                    <Link to="/manage"><FontAwesomeIcon icon={faThLarge} /> &nbsp; Manage books</Link>
                    <Link to="/addBook"><FontAwesomeIcon icon={faPlus} /> &nbsp; Add Book</Link>
                    <Link to="/editBook"><FontAwesomeIcon icon={faPencilAlt} /> &nbsp; Edit book</Link>         
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-upper">
                    <h1>Add book</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="form-down" action="/addBook" >
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
        </div>
    );
};

export default Admin;