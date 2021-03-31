import React from 'react';
import { useParams } from 'react-router';

const CheckOut = () => {
    const {_id} = useParams();
    console.log(_id);
    // const orderBooks = books.find(vc=>vc._id === _id);
    return (
        <div>
            <h1>this</h1>
        </div>
    );
};

export default CheckOut;