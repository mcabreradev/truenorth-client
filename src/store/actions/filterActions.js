// Actions
import { RESTAURANT } from './restaurantActions';

// Util
import { filterRestaurants } from '../../util';

// Types
export const FILTER = {
    SET_NAME: "SET_NAME",
    SET_SORTBY: "SET_SORTBY"
}

export const setNameAction = (name) => (dispatch, getState) => {
    try {
        dispatch({
            type: FILTER.SET_NAME,
            payload: name
        });

        // fake async delay
        setTimeout(() => dispatch({
            type: RESTAURANT.FILTER_RESTAURANTS,
            payload: filterRestaurants(getState())
        }), 400);

    } catch (error) {
        console.error(error);
    }
};

export const setSortByAction = (sortBy) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FILTER.SET_SORTBY,
            payload: sortBy
        });

        // fake async delay
        setTimeout(() => dispatch({
            type: RESTAURANT.FILTER_RESTAURANTS,
            payload: filterRestaurants(getState())
        }), 400);
        
    } catch (error) {
        console.error(error);
    }
};
