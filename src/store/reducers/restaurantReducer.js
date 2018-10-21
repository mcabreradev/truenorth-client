import { RESTAURANT } from '../actions/restaurantActions';
  
  const initialState = {
    restaurant: [],
    restaurants: [],
    filteredRestaurants: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
  
      case RESTAURANT.FETCH_RESTAURANTS:
        return {
          ...state,
          restaurants: action.payload
        };

      case RESTAURANT.FETCH_RESTAURANT_BY_ID:
        return {
          ...state,
          restaurant: action.payload
        };
      
      case RESTAURANT.FILTER_RESTAURANTS:
        return {
          ...state,
          filteredRestaurants: action.payload
        };
  
      default:
        return state;
    }
  }