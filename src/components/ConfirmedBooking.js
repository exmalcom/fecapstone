// ConfirmedBooking.js
import React from 'react';
import './styles/ConfirmedBooking.css';

const ConfirmedBooking = () => {
    return (
        <div className="confirmed-booking__container">
            <h1 className="confirmed-booking__heading">Booking Confirmed</h1>
            <p className="confirmed-booking__message">Your reservation has been successfully made!</p>
        </div>
    );
};

export default ConfirmedBooking;
