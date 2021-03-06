import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './CheckOut.css';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';


const CheckOut = () => {
    const { _id } = useParams();
    let history = useHistory();
    const [books, setBook] = useState([]);
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://secret-inlet-76223.herokuapp.com/books/${_id}`)
            .then(res => res.json())
            .then(data => {
                setBook(data[0]);
            })

    }, [_id])

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
    });

    const handleCheckInDate = (date) => {
        const newDate = { ...selectedDate }
        newDate.checkIn = date;
        setSelectedDate(newDate);
    };

    const { Book_Name, Add_Price } = books;
   
    const handleBooking = () => {
        const newBooking = { ...loggedInUser, ...selectedDate, ...books};
       delete newBooking._id;
        fetch('https://secret-inlet-76223.herokuapp.com/order', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                history.push('/order');            
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
                                    <td>
                                        <h6 name="Book_Name"> {Book_Name}</h6>
                                    </td>
                                    <td>
                                        <h6 name="Quantity"> 1</h6>
                                    </td>
                                    <td>
                                        <h6 name="Price"> {Add_Price}</h6>
                                    </td>

                                </tr>
                                <tr>
                                    <td><h6 name="Total">Total</h6></td>
                                    <td><h6 name="Total_Quantity">1</h6></td>
                                    <td>
                                        <h6 name="Price"> {Add_Price}</h6>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <KeyboardDatePicker
                            margin="normal"
                            format="dd/MM/yyyy"
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
                    <Button onClick={()=> handleBooking ()} variant="contained" color="primary"
                        className="btn btn-primary  btn-checkout">
                        Checkout
                    </Button>
                </MuiPickersUtilsProvider>
            </div>
        </div>
    );
};

export default CheckOut;