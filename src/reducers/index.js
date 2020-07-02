import { combineReducers } from 'redux';
import DateReducer from './DateReducer';

export default combineReducers({
    date: DateReducer,
});