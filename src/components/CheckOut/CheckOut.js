import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './CheckOut.css';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { Button } from '@material-ui/core';

const CheckOut = () => {
    const { _id } = useParams();
    
    const [book, setBook] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = (`http://localhost:5000/books/${_id}`)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBook(data);
            })

    }, [_id])

    const { Book_Name, Add_Price } = book;
    console.log(book);
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
    });

    const handleCheckInDate = (date) => {
        const newDate = { ...selectedDate }
        newDate.checkIn = date;
        setSelectedDate(newDate);
    };

    const handleBooking = () => {
        const newBooking = { ...loggedInUser, ...selectedDate, ...book };
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="row">
            <div className="col-md-8">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <h2>Checkout</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <th><h6> Description</h6> </th>
                                    <th><h6>Quantity</h6></th>
                                    <th><h6>Price</h6></th>
                                </tr>
                                <tr>
                                    <td><h6 name="Book_Name">{Book_Name}</h6></td>
                                    <td><h6 name="Quantity">1</h6></td>
                                    <td><h6 name="Price">{Add_Price}</h6></td>
                                </tr>
                                <tr>
                                    <td><h6 name="Total">Total</h6></td>
                                    <td><h6 name="Total_Quantity">1</h6></td>
                                    <td><h6 name="Total_Price">{Add_Price}</h6></td>
                                </tr>
                            </tbody>
                        </table>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Book In Date"
                            value={selectedDate.CheckIn}
                            onChange={handleCheckInDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Book in Time"
                            value={selectedDate.checkIn}
                            onChange={handleCheckInDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <Link to='/order'> <Button onClick={handleBooking} variant="contained" color="primary" className="btn-checkout">Checkout</Button> </Link>
            </div>
            
        </div>
    );
};

export default CheckOut;