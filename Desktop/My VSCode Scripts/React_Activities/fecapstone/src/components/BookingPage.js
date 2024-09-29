// BookingPage.js
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api'; // Import the API functions
import './styles/BookingPage.css';

// Reducer function for managing available times
const timesReducer = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE_TIMES':
            return action.payload;
        case 'UPDATE_TIMES':
            return action.payload;
        default:
            return state;
    }
};

const BookingPage = () => {
    const navigate = useNavigate();
    const [availableTimes, dispatch] = useReducer(timesReducer, []);

    const initializeTimes = async () => {
        const today = new Date().toISOString().split('T')[0]; // Get today's date
        const times = await fetchAPI(today); // Fetch available times for today
        dispatch({ type: 'INITIALIZE_TIMES', payload: times });
    };

    const updateTimes = async (selectedDate) => {
        const times = await fetchAPI(selectedDate); // Fetch available times for the selected date
        dispatch({ type: 'UPDATE_TIMES', payload: times });
    };

    const handleNewBooking = async (formData) => {
        const success = await submitAPI(formData); // Submit the form data
        if (success) {
            navigate('/confirmed'); // Navigate to confirmation page
        }
    };

    // Initialize times on component mount
    React.useEffect(() => {
        initializeTimes();
    }, []);

    return (
        <div className="booking-page__container">
            <h1 className="booking-page__heading">Reserve a Table</h1>
            <p className="booking-page__subheading">Please fill in the details below to book a table.</p>
            <div className="booking-page__form-container">
                <BookingForm
                    availableTimes={availableTimes}
                    onUpdateTimes={updateTimes}
                    onSubmit={handleNewBooking}
                />
            </div>
            <h2>Available Slots</h2>
            <div className="booking-page__slots-container">
                {availableTimes.map((time) => (
                    <BookingSlot key={time} time={time} className="booking-page__slot" />
                ))}
            </div>
        </div>
    );
};

export default BookingPage;
