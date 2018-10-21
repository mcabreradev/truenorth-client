import { ORDER } from '../actions/orderActions';
  
  const initialState = {
    totalSelectedMeals: [],
    orderDetails: {}
  };
  
  export default function (state = initialState, action) {
    
    switch (action.type) {
      case ORDER.SET_TOTAL_PRICE:
        return {
          ...state,
          totalSelectedMeals: {
            ...state.totalSelectedMeals,
            [action.mealId] : {
              total: action.total
            }
          }
        };

      case ORDER.SET_ORDER_DETAILS:
      const key = Object.keys(action.payload)[0];
      state.orderDetails[key] = action.payload[key]

      return {
        ...state
      }
  
      default:
        return state;
    }
  }