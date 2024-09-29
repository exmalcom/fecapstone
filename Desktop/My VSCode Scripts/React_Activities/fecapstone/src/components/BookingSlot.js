// BookingSlot.js
import React from 'react';
import './styles/BookingSlot.css';

const BookingSlot = ({ time, isBooked }) => {
    return (
        <div 
            className={`booking-slot__container ${isBooked ? 'booking-slot__booked' : 'booking-slot__available'}`}
        >
            <span>{time}</span>
            <span>{isBooked ? '(Booked)' : '(Available)'}</span>
        </div>
    );
};

export default BookingSlot;
