import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { saveFavorite } from '../actions';

const Favorite = (props) => {
    console.log('in favorite', props.picture);

    function saveToFavorite() {
        props.saveFavorite(props.picture);
    }

    console.log(props.favorites);

    return (
        <>
            <button onClick={saveToFavorite}>favorite</button>
        </>
    );
};

const mapStateToProps = (state) => {
    return { favorites: state.favorites.favorites };
};

export default connect(mapStateToProps, { saveFavorite })(Favorite);
