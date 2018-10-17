import {
    FETCH_RESTAURANTS,
    FETCH_RESTAURANT_BY_ID,
    FILTER_RESTAURANTS,
    SET_NAME,
    SET_SORTBY,
    TOGGLE_LOADING,
    TOGGLE_MODAL,
    SET_TOTAL_PRICE,
    SET_ORDER_DETAILS,
} from './types';
import { filterRestaurants } from '../../util';
import { findAll, findById } from '../../util/api';

export const fetchRestaurants = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: TOGGLE_LOADING,
            payload: true
        });

        const response = await findAll();
        const restaurants = response.data.data;

        dispatch({
            type: FETCH_RESTAURANTS,
            payload: restaurants
        });

        dispatch({
            type: FILTER_RESTAURANTS,
            payload: filterRestaurants(getState().data)
        });

        dispatch({
            type: TOGGLE_LOADING,
            payload: false
        });

    } catch (error) {
        console.error(error);
        dispatch({
            type: TOGGLE_LOADING,
            payload: false
        });
    }
};

export const fetchRestaurantById= (resto_id) => async (dispatch, getState) => {
    try {

        dispatch({
            type: TOGGLE_LOADING,
            payload: true
        });

        const response = await findById(resto_id);
        const restaurant = response.data.data[0];

        dispatch({
            type: FETCH_RESTAURANT_BY_ID,
            payload: restaurant
        });

        dispatch({
            type: TOGGLE_LOADING,
            payload: false
        });

    } catch (error) {
        console.error(error);
        dispatch({
            type: TOGGLE_LOADING,
            payload: false
        });
    }
};

export const filterData = () => (dispatch, getState) => {
    dispatch({
        type: FILTER_RESTAURANTS,
        payload: filterRestaurants(getState().data)
    });
};

export const setName = (name) => (dispatch, getState) => {
    try {
        dispatch({
            type: SET_NAME,
            payload: name
        });

        // fake async delay
        setTimeout(() => dispatch({
            type: FILTER_RESTAURANTS,
            payload: filterRestaurants(getState().data)
        }), 400);
        

    } catch (error) {
        console.error(error);
    }
};

export const setSortBy = (sortBy) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SET_SORTBY,
            payload: sortBy
        });

        // fake async delay
        setTimeout(() => dispatch({
            type: FILTER_RESTAURANTS,
            payload: filterRestaurants(getState().data)
        }), 100);
        
    } catch (error) {
        console.error(error);
    }
};

export const toggleModal = (isActive, resto_id) => (dispatch, getState) => {
    try {
        dispatch({
            type: TOGGLE_MODAL,
            payload: isActive,
            reviewedRestaurant: typeof resto_id !== "undefined" ? getState().data.restaurants.find(resto => resto._id === resto_id) : []
        });
    } catch (error) {
        console.error(error);
    }
};

export const setTotalPrice = (total, mealId) => (dispatch) => {
    try {
        dispatch({
            type: SET_TOTAL_PRICE,
            total: total,
            mealId
        });
    } catch (error) {
        console.error(error);
    }
};

export const setOrderDetails= (details) => (dispatch) => {
    try {
        dispatch({
            type: SET_ORDER_DETAILS,
            payload: details
        });
    } catch (error) {
        console.error(error);
    }
};