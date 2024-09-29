import React, { useReducer, useEffect } from 'react';
import BookingPage from './BookingPage';
import { useNavigate } from 'react-router-dom';

// Reducer function to handle state changes
const reducer = (state, action) => {
    switch (action.type) {
        case 'INITIALIZE_TIMES':
            return { ...state, availableTimes: action.times }; // Initializes times from API
        case 'UPDATE_TIMES':
            return { ...state, availableTimes: action.times }; // Updates times when date is selected
        default:
            return state;
    }
};

const Main = () => {

    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, { availableTimes: [] });


    const initializeTimes = async () => {
        const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
        const availableTimes = await window.fetchAPI(today); // Fetch available times from API
        dispatch({ type: 'INITIALIZE_TIMES', times: availableTimes });
    };

    const updateTimes = async (selectedDate) => {
        const availableTimes = await window.fetchAPI(selectedDate); // Fetch available times based on date
        dispatch({ type: 'UPDATE_TIMES', times: availableTimes });
    };


    const submitForm = async (FormData) => {
        const result = await window.fetchAPI(FormData);
        if (result) {
            navigate('/confirmed-booking');
        }
    }


    useEffect(() => {
        initializeTimes(); // Fetch initial times on component mount
    }, []);

    return (
        <div>
            <h1>Little Lemon</h1>
            <BookingPage 
                availableTimes={state.availableTimes} 
                onUpdateTimes={updateTimes}
                onSubmitForm={submitForm}
            />
        </div>
    );
};

export default Main;
