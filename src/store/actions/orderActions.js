// Util
import { getDistance } from '../../util/api';

import { APP } from './appActions';

// Types
export const ORDER = {
    SET_TOTAL_PRICE: "SET_TOTAL_PRICE",
    SET_ORDER_DETAILS: "SET_ORDER_DETAILS",
    SET_DISTANCES: "SET_DISTANCES",
}

export const setTotalPriceAction = (total, mealId) => (dispatch) => {
    try {
        dispatch({
            type: ORDER.SET_TOTAL_PRICE,
            total: total,
            mealId
        });
    } catch (error) {
        console.error(error);
    }
};

export const setOrderDetailsAction = (details) => (dispatch) => {
    console.log(details);
    try {
        dispatch({
            type: ORDER.SET_ORDER_DETAILS,
            payload: details
        });
    } catch (error) {
        console.error(error);
    }
};

export const getDistances = () => async (dispatch, getState) => {

    dispatch({
        type: APP.TOGGLE_LOADING,
        payload: true
    });

    const coordinates = {
        origin: getState().restaurant.restaurant.location,
        destination: getState().order.orderDetails.location
     }

    // console.log(coordinates);

    try {
        const response = await getDistance(coordinates);

        console.log(response); 

        dispatch({
            type: ORDER.SET_DISTANCES,
            payload: response
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
}