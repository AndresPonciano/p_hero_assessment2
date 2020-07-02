import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'; 
import { setPrevDate, setNextDate } from '../actions';
import axios from 'axios';

const DisplayImage = (props) => {

    function prevDate() {
        const yesterday = new Date(props.date);
        yesterday.setDate(props.date.getDate() - 1);
        props.setPrevDate(yesterday);
    }

    function nextDate() {
        const tomorrow = new Date(props.date);
        tomorrow.setDate(props.date.getDate() + 1);
        props.setNextDate(tomorrow);
    }

    const year = (props.date.getFullYear()).toString();
    const month = (props.date.getMonth() + 1).toString().padStart(2, '0');
    const day = (props.date.getDate()).toString().padStart(2, '0');

    console.log('year', year, typeof(year));
    console.log('month', month, typeof(month));
    console.log('day', day, typeof(day));

    // const [picture, setPicture] = useState({});

    // const NASA_KEY = process.env.REACT_APP_NASA_API_KEY;

    // useEffect(() => {
    //   axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${year}-${month}-03`)
    //     .then(response => {
    //       setPicture(response.data);
    //       console.log('please dont repeat');
    //     });
    // }, []);

    // console.log(picture);

    return (
        <>
            <h1>hello</h1>
            {props.date.toString()}
            <button onClick={prevDate}>prev</button>
            <button onClick={nextDate}>next</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return { date: state.date.date };
  }
  
  export default connect(
      mapStateToProps, { setPrevDate, setNextDate } 
  )(DisplayImage);