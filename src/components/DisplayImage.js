import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setPrevDate, setNextDate } from '../actions';
import axios from 'axios';
import '../styles/display.css';
import Favorite from './Favorite';

const DisplayImage = (props) => {
    function prevDate() {
        const yesterday = new Date(props.date);
        yesterday.setDate(yesterday.getDate() - 1);
        props.setPrevDate(yesterday.toString());
    }

    function nextDate() {
        const today = new Date();

        const tomorrow = new Date(props.date);
        tomorrow.setDate(tomorrow.getDate() + 1);

        //making sure we don't fetch a date after current date
        if (today.getTime() > tomorrow.getTime()) {
            props.setNextDate(tomorrow.toString());
        }
    }

    const tempDate = new Date(props.date);

    const year = tempDate.getFullYear().toString();
    const month = (tempDate.getMonth() + 1).toString().padStart(2, '0');
    const day = tempDate.getDate().toString().padStart(2, '0');

    const [picture, setPicture] = useState({});

    const NASA_KEY = process.env.REACT_APP_NASA_API_KEY;

    useEffect(() => {
        axios
            .get(
                `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${year}-${month}-${day}`
            )
            .then((response) => {
                setPicture(response.data);
            });
    }, [props.date]);

    // CHECK IF JULY 1ST HAS valid picture
    return (
        <>
            <h1>{props.date}</h1>
            <div className="container">
                <button className="btn-left" onClick={prevDate}>
                    prev
                </button>
                <img
                    // src={
                    //     'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg'
                    // }
                    src={picture.url}
                    alt="nasa's of the day"
                />
                <button className="btn-right" onClick={nextDate}>
                    next
                </button>
            </div>
            <Favorite picture={picture} />
            <h2>{picture.title}</h2>
            <p>{picture.explanation}</p>
        </>
    );
};

const mapStateToProps = (state) => {
    return { date: state.date.date };
};

export default connect(mapStateToProps, { setPrevDate, setNextDate })(
    DisplayImage
);
