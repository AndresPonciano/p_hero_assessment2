import { SET_DATE, SETPREV_DATE, SETNEXT_DATE } from '../actions/types';

const INITIAL_SATE = {
    date: new Date(),
};

export default (state = INITIAL_SATE, action) => {
    switch (action.type) {
        case SET_DATE:
            return { ...state, date: action.payload };

        case SETPREV_DATE:
            return { ...state, date: action.payload };

        case SETNEXT_DATE:
            return { ...state, date: action.payload };

        default:
            return state;
    }
};
