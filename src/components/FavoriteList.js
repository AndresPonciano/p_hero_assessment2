import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const FavoriteList = (props) => {
    function renderFavs(pictureData) {
        return (
            <div key={pictureData.title}>
                <img src={pictureData.url} alt="nasa apod" />
                <h2>{pictureData.title}</h2>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <h1>hi</h1>
            {props.favorites.map(renderFavs)}
        </>
    );
};

const mapStateToProps = (state) => {
    return { favorites: state.favorites.favorites };
};

export default connect(mapStateToProps, {})(FavoriteList);
