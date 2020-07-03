import { combineReducers } from 'redux';
import DateReducer from './DateReducer';
import FavoriteReducer from './FavoriteReducer';

export default combineReducers({
    date: DateReducer,
    favorites: FavoriteReducer,
});
