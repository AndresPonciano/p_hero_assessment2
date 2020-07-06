import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { deleteFavorite, deleteAll, setDate } from '../actions';

const FavoriteList = (props) => {
    function renderFavs(pictureData) {
        let media;
        if (pictureData.media_type === 'image') {
            media = (
                <img className="card-image" src={pictureData.url} alt="nasa" />
            );
        } else {
            media = (
                <iframe
                    src={pictureData.url}
                    height="175px"
                    title="media"
                    frameBorder="0"
                />
            );
        }

        return (
            <div className="card" key={pictureData.title}>
                {media}
                {/* simplest way to reuse DisplayImage was to simply change state and redirect to App */}
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
                    <h2>{pictureData.title}</h2>
                </Link>
                <h3>{pictureData.date}</h3>
                <button
                    onClick={function () {
                        props.deleteFavorite(pictureData);
                    }}
                >
                    Delete
                </button>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <button className="deleteAll" onClick={props.deleteAll}>
                Delete All
            </button>
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
