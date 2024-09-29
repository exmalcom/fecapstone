import logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import './styles/Nav.css';

const Nav = () => {
    return (
        <>
            <div className="nav-container">
                <div className="logo">
                        <a href="#home">
                            <img src={logo} alt="Little Lemon Logo" />
                        </a>
                </div>
                <nav className="navbar" role="navigation">
                    <ul className="nav-links">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/chicago">About</Link></li>
                        <li><Link to="/specials">Menu</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/order-online">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Nav;