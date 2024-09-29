import MA from "../images/MA.jpg";
import './styles/FooterSection.css';
import { Link } from 'react-router-dom';

function FooterSection() {
    return (
        <>
            <footer className="footer-container" role="contentinfo">
                <div className="footer-logo">
                    <img src={MA} alt="Mario and Adrian" width={"300px"}/>
                </div>
                <div className="doormat-navigation">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/chicago">About</Link></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#order-online">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>

                <div className="contact">
                    <h3>Contact Us</h3>
                    <p>Address: 123 Lemon St, Chicago, IL</p>
                    <p>Phone: (555) 123-4567</p>
                    <p>Email: contact@littlelemon.com</p>
                </div>

                <div className="social-media">
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="www.facebook.com">Facebook</a></li>
                        <li><a href="www.twitter.com">Twitter</a></li>
                        <li><a href="www.instagram.com">Instagram</a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default FooterSection;