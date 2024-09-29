// BookingForm.js
import React, { useState } from 'react';
import './styles/BookingForm.css';

const BookingForm = ({ availableTimes, onUpdateTimes, onSubmit }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        onUpdateTimes(selectedDate); // Update available times
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        onSubmit(formData); // Submit form data
    };

    return (
        <form className="booking-form__container" onSubmit={handleSubmit}>
            <label className="booking-form__label" htmlFor="res-date">Choose date</label>
            <input
                className="booking-form__input"
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                required
            />
            <label className="booking-form__label" htmlFor="res-time">Choose time</label>
            <select
                className="booking-form__select"
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            >
                <option value="">Select a time</option>
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>
            <label className="booking-form__label" htmlFor="guests">Number of Guests</label>
            <input
                className="booking-form__input"
                type="number"
                id="guests"
                min={1}
                max={10}
                placeholder='input a number between 1 and 10'
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
            />
            <label className="booking-form__label" htmlFor="occasion">Occasion</label>
            <select
                className="booking-form__select"
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
            >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
                <option value="Other">Other</option>
            </select>
            <button className="booking-form__submit-button" type="submit">Submit Reservation</button>
        </form>
    );
};

export default BookingForm;
