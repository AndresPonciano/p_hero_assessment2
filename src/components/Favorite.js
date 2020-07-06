import React from 'react';
import { connect } from 'react-redux';
import { saveFavorite } from '../actions';

const Favorite = (props) => {
    function saveToFavorite() {
        props.saveFavorite(props.picture);
    }

    return (
        <button className="fav-btn" onClick={saveToFavorite}>
            Favorite
        </button>
    );
};

const mapStateToProps = (state) => {
    return { favorites: state.favorites.favorites };
};

export default connect(mapStateToProps, { saveFavorite })(Favorite);
