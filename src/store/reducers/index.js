import { combineReducers } from 'redux';
import restaurant from './restaurantReducer';
import app from './appReducers';
import filter from './filterReducer';
import order from './orderReducers';

export default combineReducers({
    restaurant,
    app,
    filter,
    order,
});