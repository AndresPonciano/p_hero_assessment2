import React from 'react';
import DatePicker from 'react-datepicker';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    function handleChange(date) {
        // props.setDate(date);
    }

    return (
        <nav className="navbar">
            <DatePicker
                className="navElement"
                onChange={handleChange}
                maxDate={new Date()}
            />
            <Link className="navElement" to="#">
                Favorite Dates
            </Link>
        </nav>
    );
};

export default Navbar;
