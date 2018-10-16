import {
  FETCH_RESTAURANTS,
  FETCH_RESTAURANT_BY_ID,
  FILTER_RESTAURANTS,
  SET_NAME,
  SET_SORTBY,
  TOGGLE_LOADING,
  TOGGLE_MODAL,
  SET_TOTAL_PRICE,
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
    totalSelectedMeals: []
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
  
      default:
        return state;
    }
  }