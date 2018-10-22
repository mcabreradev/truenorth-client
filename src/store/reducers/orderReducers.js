import { ORDER } from '../actions/orderActions';
  
  const initialState = {
    totalSelectedMeals: [],
    orderDetails: {},
    distances: [],
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
      const keys = Object.keys(action.payload);
      keys.map(key => state.orderDetails[key] = action.payload[key]);

      return {
        ...state
      }

    case ORDER.SET_DISTANCES:
      return {
        ...state,
        distances: action.payload
      };
  
      default:
        return state;
    }
  }