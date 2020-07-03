import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setPrevDate, setNextDate } from '../actions';
import axios from 'axios';
import '../styles/display.css';
import Favorite from './Favorite';

const DisplayImage = (props) => {
    function prevDate() {
        const yesterday = new Date(props.date);
        yesterday.setDate(props.date.getDate() - 1);
        props.setPrevDate(yesterday);
    }

    function nextDate() {
        const today = new Date();

        const tomorrow = new Date(props.date);
        tomorrow.setDate(props.date.getDate() + 1);

        //making sure we don't fetch a date after current date
        if (today.getTime() > tomorrow.getTime()) {
            props.setNextDate(tomorrow);
        }
    }

    const year = props.date.getFullYear().toString();
    const month = (props.date.getMonth() + 1).toString().padStart(2, '0');
    const day = props.date.getDate().toString().padStart(2, '0');

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
            <h1>{props.date.toLocaleDateString()}</h1>
            <div className="container">
                <button className="btn-left" onClick={prevDate}>
                    prev
                </button>
                <img
                    src={picture.url}
                    // src="https://apod.nasa.gov/apod/image/2007/ldn1251_jerahian1024.jpg"
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
