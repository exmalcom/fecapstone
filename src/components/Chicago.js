import MarioAndArianA from '../images/Mario and Adrian A.jpg';
import MarioAndArianB from '../images/Mario and Adrian b.jpg';
import React from 'react';
import './styles/Chicago.css';

const Chicago = () => {
    return (
        <>
            <section className="about-text-img-container">
                <div className="about-us-text">
                    <h2>About Us</h2>
                </div>
                <div className="about-text-container" id="about">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Nestled in the heart of Chicago, Little Lemon is a cozy, family-owned Mediterranean restaurant that brings the vibrant flavors of the Mediterranean to the bustling city streets. Established in 2010 by two brothers, Marco and Antonio, who grew up in a small coastal village in Greece, Little Lemon was born out of their passion for sharing the authentic recipes passed down through generations.
                        What started as a humble eatery with just a few tables has now grown into a local favorite, known for its warm hospitality and fresh, locally sourced ingredients. Little Lemon’s menu features a delightful blend of traditional dishes with a modern twist, from savory grilled kebabs and zesty lemon-infused salads to freshly baked pita and house-made hummus.
                        Despite its growth, Little Lemon has kept its family roots alive, with Marco and Antonio still personally overseeing the kitchen and ensuring that every dish captures the essence of their Mediterranean heritage. The restaurant prides itself on being a welcoming place for both locals and visitors, offering a taste of home-cooked comfort in the heart of the Windy City.
                    </p>
                </div>

                <div className='about-images-container'>
                    <div className="MAAA">
                        <img src={MarioAndArianA} alt="Mario and Adrian" width={"300px"}/>
                    </div>
                    <div className="MAAB">
                        <img src={MarioAndArianB} alt="Mario and Adrian" width={"300px"}/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Chicago;