import { SET_DATE, SETPREV_DATE, SETNEXT_DATE, SAVE_FAVORITE } from './types';

export const setDate = (date) => {
    return {
        type: SET_DATE,
        payload: date,
    };
};

export const setPrevDate = (yesterday) => {
    return {
        type: SETPREV_DATE,
        payload: yesterday,
    };
};

export const setNextDate = (tomorrow) => {
    return {
        type: SETNEXT_DATE,
        payload: tomorrow,
    };
};

export const saveFavorite = (picture) => {
    return {
        type: SAVE_FAVORITE,
        payload: picture,
    };
};
