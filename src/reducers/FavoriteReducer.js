import { SAVE_FAVORITE, DELETE_FAVORITE, DELETE_ALL } from '../actions/types';

const INITIAL_SATE = {
    favorites: [],
};

export default (state = INITIAL_SATE, action) => {
    switch (action.type) {
        case SAVE_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };

        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(function (item) {
                    return item !== action.payload;
                }),
            };

        case DELETE_ALL:
            return {
                ...state,
                favorites: [],
            };

        default:
            return state;
    }
};
