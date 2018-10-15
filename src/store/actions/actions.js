import axios from 'axios';

import {
    FETCH_RESTAURANTS,
    FILTER_RESTAURANTS,
    SET_NAME,
    SET_SORTBY,
    TOGGLE_LOADING,
    TOGGLE_MODAL,
} from './types';

import {
    ENDPOINT,
    filterRestaurants
} from '../../util';

export const fetchRestaurants = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: TOGGLE_LOADING,
            payload: true
        });

        const response = await axios.get(ENDPOINT + '/restaurants');
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
    console.log(typeof resto_id);
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