// Actions
import { APP } from './appActions';


// Utils
import { filterRestaurants } from '../../util';
import { findAll, findById } from '../../util/api';

// Types
export const RESTAURANT = {
    FETCH_RESTAURANTS: "FETCH_RESTAURANTS",
    FILTER_RESTAURANTS: "FILTER_RESTAURANTS",
    FETCH_RESTAURANT_BY_ID: "FETCH_RESTAURANT_BY_ID",
}

export const fetchRestaurantsAction = () => async (dispatch, getState) => {

    dispatch({
        type: APP.TOGGLE_LOADING,
        payload: true
    });

    try {
        const response = await findAll();
        const restaurants = response.data.data;

        dispatch({
            type: RESTAURANT.FETCH_RESTAURANTS,
            payload: restaurants
        });

        dispatch({
            type: RESTAURANT.FILTER_RESTAURANTS,
            payload: filterRestaurants(getState())
        });

        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: false
        });

    } catch (error) {
        console.error(error);
        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: false
        });
    }
};

export const fetchRestaurantByIdAction= (resto_id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: true
        });

        const response = await findById(resto_id);
        const restaurant = response.data.data[0];

        dispatch({
            type: RESTAURANT.FETCH_RESTAURANT_BY_ID,
            payload: restaurant
        });

        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: false
        });

    } catch (error) {
        console.error(error);
        dispatch({
            type: APP.TOGGLE_LOADING,
            payload: false
        });
    }
};

export const filterRestaurantsAction = () => (dispatch, getState) => {
    console.log("filtered restaureat");
    try {
        dispatch({
            type: RESTAURANT.FILTER_RESTAURANTS,
            payload: filterRestaurants(getState())
        });
    } catch (error) {
        console.error(error);
    }
};