import React from "react";
import './App.css';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import CallToAction from './components/CallToAction';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import Chicago from './components/Chicago';
import BookingPage from './components/BookingPage';
import FooterSection from './components/FooterSection';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/Main";
import ConfirmedBooking from "./components/ConfirmedBooking";


const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/home" element={<Homepage/>} />
        <Route path="/" element={<CallToAction />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/customers-say" element={<CustomersSay />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/" element={<Main />} />
        <Route path="confirmed" element={<ConfirmedBooking />}/>
      </Routes>
      <FooterSection />
    </Router>
  );
};

export default App;