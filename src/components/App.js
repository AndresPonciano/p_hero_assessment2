import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { setDate } from '../actions';
import DisplayImage from './DisplayImage';
import Navbar from './Navbar';

function App(props) {
    function handleChange(date) {
        props.setDate(date);
    }

    return (
        <>
            <Navbar />
            <DatePicker onChange={handleChange} maxDate={new Date()} />
            {props.date.toString()}
            <DisplayImage />
        </>
    );
}

const mapStateToProps = (state) => {
    return { date: state.date.date };
};

export default connect(mapStateToProps, { setDate })(App);
