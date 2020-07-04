import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { setDate } from '../actions';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    function handleChange(date) {
        props.setDate(date.toString());
    }

    return (
        <nav className="navbar">
            <DatePicker
                className="navElement"
                onChange={handleChange}
                maxDate={new Date()}
                placeholderText=" Pick a date"
            />
            <Link className="navElement" to="/">
                Home
            </Link>
            <Link className="navElement" to="/FavList">
                Favorite Dates
            </Link>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return { date: state.date.date };
};

export default connect(mapStateToProps, { setDate })(Navbar);
