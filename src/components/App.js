import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { setDate } from '../actions';
import DisplayImage from './DisplayImage';

function App(props) {

  function handleChange (date) {
    props.setDate(date);
  }
  
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
