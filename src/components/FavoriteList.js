import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { deleteFavorite, deleteAll } from '../actions';

const FavoriteList = (props) => {
    function clickDeleteAll() {
        props.deleteAll();
    }

    function renderFavs(pictureData) {
        return (
            <div key={pictureData.title}>
                <img src={pictureData.url} alt="nasa apod" />
                <h2>{pictureData.title}</h2>
                <button
                    onClick={function () {
                        console.log(pictureData);
                        props.deleteFavorite(pictureData);
                    }}
                >
                    delete
                </button>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <h1>hi</h1>
            <button onClick={clickDeleteAll}>Delete All</button>
            {props.favorites.map(renderFavs)}
        </>
    );
};

const mapStateToProps = (state) => {
    return { favorites: state.favorites.favorites };
};

export default connect(mapStateToProps, { deleteFavorite, deleteAll })(
    FavoriteList
);
