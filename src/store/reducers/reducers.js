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
  } from '../actions/types';
  
  const initialState = {
    restaurant: [],
    restaurants: [],
    filteredRestaurants: [],
    name: "",
    sortBy: "",
    isLoading: false,
    isModalActive: false,
    reviewedRestaurant: [],
    totalSelectedMeals: [],
    orderDetails: {}
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
  
      case FETCH_RESTAURANTS:
        return {
          ...state,
          restaurants: action.payload
        };

      case FETCH_RESTAURANT_BY_ID:
        return {
          ...state,
          restaurant: action.payload
        };
      
      case FILTER_RESTAURANTS:
        return {
          ...state,
          filteredRestaurants: action.payload
        };
  
      case SET_NAME:
        return {
          ...state,
          name: action.payload
        };
  
      case SET_SORTBY:
        return {
          ...state,
          sortBy: action.payload
        };
    
      case TOGGLE_LOADING:
        return {
          ...state,
          isLoading: action.payload
        };

      case TOGGLE_MODAL:
        return {
          ...state,
          isModalActive: action.payload,
          reviewedRestaurant: action.reviewedRestaurant
        };
      
      case SET_TOTAL_PRICE:
        return {
          ...state,
          totalSelectedMeals: {
            ...state.totalSelectedMeals,
            [action.mealId] : {
              total: action.total
            }
          }
        };

      case SET_ORDER_DETAILS:
      const key = Object.keys(action.payload)[0];
      state.orderDetails[key] = {
        ...state.orderDetails[key],
        [key] : action.payload[key]
      }

      return {
        ...state
      }
  
      default:
        return state;
    }
  }