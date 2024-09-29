import GreekSalad from '../images/greek salad.jpg';
import Bruchetta from '../images/bruchetta.png';
import LemonDessert from '../images/lemon dessert.jpg';
import Bike from '../images/Bike.png';
import React from 'react';
import './styles/Specials.css';

const Specials = () => {
    return (
        <>
            <section className="highlights">
                <div className="highlights-header">
                    <h2 id="menu">Menu Highlights</h2>
                    <button className="menu-button">Online Menu</button>
                </div>


                <div className="highlights-card-container">
                    <div className="card card1">
                        <img src={GreekSalad} alt="Greek salad" className="card1-img" width={"250px"}/>
                        <div className="food-info">
                            <h3>Greek salad</h3>
                            <p className="price">$12.99</p>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <div className="order">
                            <a href="#order-online">Order a delivery</a>
                            <img src={Bike} alt="Bike" className="bike-img" width={"20px"}/>
                        </div>
                    </div>


                    <div className="card card2">
                        <img src={Bruchetta} alt="Bruchetta" className="card2-img" width={"250px"}/>
                        <div className="food-info">
                            <h3>Bruchetta</h3>
                            <p className="price">$ 5.99</p>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        <div className="order">
                            <a href="#order-online">Order a delivery</a>
                            <img src={Bike} alt="Bike" className="bike-img" width={"20px"}/>
                        </div>
                    </div>


                    <div className="card card3">
                        <img src={LemonDessert} alt="Lemon Dessert" className="card3-img" width={"250px"}/>
                        <div className="food-info">
                            <h3>Lemon Dessert</h3>
                            <p className="price">$ 5.00</p>
                        </div>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <div className="order">
                            <a href="#order-online">Order a delivery</a>
                            <img src={Bike} alt="Bike" className="bike-img" width={"20px"}/>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Specials;