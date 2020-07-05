import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { deleteFavorite, deleteAll, setDate } from '../actions';

const FavoriteList = (props) => {
    function renderFavs(pictureData) {
        return (
            <div key={pictureData.title}>
                <img src={pictureData.url} alt="nasa apod" />
                {/* easiest way to reuse DisplayImage was to simply change state and redirect to App */}
                <h2>{pictureData.title}</h2>
                <Link
                    to="/"
                    onClick={function () {
                        const myDate = pictureData.date.split('-');
                        props.setDate(
                            new Date(
                                myDate[0],
                                myDate[1] - 1,
                                myDate[2]
                            ).toString()
                        );
                    }}
                >
                    hi
                </Link>
                <button
                    onClick={function () {
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
            <button onClick={props.deleteAll}>Delete All</button>
            {props.favorites.map(renderFavs)}
        </>
    );
};

const mapStateToProps = (state) => {
    return { favorites: state.favorites.favorites, date: state.date.date };
};

export default connect(mapStateToProps, { deleteFavorite, deleteAll, setDate })(
    FavoriteList
);
