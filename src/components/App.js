import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { setDate } from '../actions';
import axios from 'axios';
import DisplayImage from './DisplayImage';

function App(props) {

  function handleChange (date) {
    props.setDate(date);
    // console.log(picture);
  }

  const [picture, setPicture] = useState({});

  // useEffect(() => {
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=')
  //     .then(response => {
  //       setPicture(response.data);
  //     });
  // }, []);
  
  return (
    <>
      <DatePicker onChange={handleChange}/>
      {props.date.toString()}
      <DisplayImage/>
    </>
  );
}

const mapStateToProps = (state) => {
  return { date: state.date.date };
}

export default connect(
    mapStateToProps, { setDate } 
)(App);
