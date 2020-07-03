import { SAVE_FAVORITE } from '../actions/types';

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

        default:
            return state;
    }
};