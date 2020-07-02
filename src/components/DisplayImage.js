import React from 'react';
import { connect } from 'react-redux'; 
import { setPrevDate } from '../actions';

const DisplayImage = (props) => {

    function prevDate() {
        const yesterday = new Date();
        yesterday.setDate(props.date.getDate() - 1);
        props.setPrevDate(yesterday);
    }

    function nextDate() {
        console.log('bye');
    }

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
      mapStateToProps, { setPrevDate } 
  )(DisplayImage);