import { APP } from '../actions/appActions';
  
  const initialState = {
    isLoading: false,
    isModalActive: false,
    reviewedRestaurant: [],
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
    
      case APP.TOGGLE_LOADING:
        return {
          ...state,
          isLoading: action.payload
        };

      case APP.TOGGLE_MODAL:
        return {
          ...state,
          isModalActive: action.payload,
          reviewedRestaurant: action.reviewedRestaurant
        };
  
      default:
        return state;
    }
  }