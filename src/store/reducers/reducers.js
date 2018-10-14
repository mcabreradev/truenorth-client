import {
  FETCH_RESTAURANTS,
  FILTER_RESTAURANTS,
  SET_NAME,
  SET_SORTBY,
  TOGGLE_LOADING
  } from '../actions/types';
  
  const initialState = {
    restaurants: [],
    filteredRestaurants: [],
    name: "",
    sortBy: "",
    isLoading: false,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
  
      case FETCH_RESTAURANTS:
        return {
          ...state,
          restaurants: action.payload
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
  
      default:
        return state;
    }
  }