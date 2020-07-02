import { SET_DATE, SETPREV_DATE, SETNEXT_DATE } from '../actions/types';
import { setDate } from '../actions';

const INITIAL_SATE = {
    date: new Date(),
}

export default (state = INITIAL_SATE, action) => {

    switch(action.type) {
        case SET_DATE:
            return { date: action.payload };

        case SETPREV_DATE:
            return { date: action.payload };
    
        default:
            return state;
    }
}