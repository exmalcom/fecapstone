// src/api.js
const fetchAPI = async (date) => {
    return new Promise((resolve) => {
        // This simulates the behavior of the external API function
        const availableTimes = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"]; // Sample available times
        resolve(availableTimes);
    });
};

const submitAPI = async (formData) => {
    return new Promise((resolve) => {
        // This simulates successful submission
        console.log("Form data submitted:", formData);
        resolve(true); // Return true to simulate successful submission
    });
};

export { fetchAPI, submitAPI };
