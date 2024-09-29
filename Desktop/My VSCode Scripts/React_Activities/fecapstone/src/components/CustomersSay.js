import MaryK from "../images/Mary K.jpg";
import JohnS from "../images/John S.jpg";
import JaneD from "../images/Jane D.jpg";
import MichaelB from "../images/Michael B.jpg";
import React from 'react';
import './styles/CustomersSay.css';

const CustomersSay = () => {
    return (
        <>
            <section className="testimonials" id="testimonials">
                <h2 id="testimonials-title">Customer Testimonials</h2>
                <div className="testimonials-container">
                    <div className="testimonial testimonial-1">
                        <div className="name">
                            <strong>Jane D.</strong>
                        </div>
                        <div className="photo-rating">
                            <img src={JaneD} alt="Jane D." width={"100px"}/>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        <p>"Best Mediterranean food I've ever had!"</p>
                    </div>



                    <div className="testimonial testimonial-2">
                        <div className="name">
                            <strong>John S.</strong>
                        </div>
                        <div className="photo-rating">
                            <img src={JohnS} alt="John S." width={"100px"}/>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        <p>"A hidden gem in Chicago. Will definitely come back!"</p>
                    </div>


                    <div className="testimonial testimonial-3">
                        <div className="name">
                            <strong>Mary K.</strong>
                        </div>
                        <div className="photo-rating">
                            <img src={MaryK} alt="Mary K." width={"100px"}/>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        <p>"Fantastic atmosphere and great service."</p>
                    </div>



                    <div className="testimonial testimonial-4">
                        <div className="name">
                            <strong>Michael B.</strong>
                        </div>
                        <div className="photo-rating">
                            <img src={MichaelB} alt="Michael B." width={"100px"}/>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        <p>"The grilled salmon was delicious!"</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CustomersSay;