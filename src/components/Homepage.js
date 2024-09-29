import React from "react";
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";


const  Homepage = () => {
    return (
        <>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </>
    );
};

export default Homepage;

























/*import restaurantfood from "../images/restaurantfood.jpg";

function HeroSection() {
    return (
        <section className="hero-content-container" id="home">
            <div className="hero-texts-container">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Welcome to Little Lemon, where fresh ingredients and vibrant flavors come together to create a delightful Mediterranean dining experience. Enjoy a taste of the Mediterranean right in the heart of Chicago, with a menu full of handmade dishes and a warm, inviting atmosphere. Whether dining in or reserving a table online, Little Lemon brings the zest of authentic cuisine to your table.</p>
            <div className="hero-button">
                <button>Reserve a Table</button>
            </div>
            </div>
            <div className="hero-image-container">
                <img src={restaurantfood} alt="restaurant food" width={"250px"} className="restaurantfood-image"/>
            </div>
        </section>
    );
};

export default HeroSection;*/