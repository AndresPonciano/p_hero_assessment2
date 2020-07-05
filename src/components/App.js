import React from 'react';
import DisplayImage from './DisplayImage';
import Navbar from './Navbar';
import '../styles/App.css';

function App(props) {
    return (
        <>
            <Navbar />
            <DisplayImage />
        </>
    );
}

export default App;
