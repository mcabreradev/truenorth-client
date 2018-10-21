import { FILTER}  from '../actions/filterActions';
  
  const initialState = {
    name: "",
    sortBy: "",
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
  
      case FILTER.SET_NAME:
        return {
          ...state,
          name: action.payload
        };
  
      case FILTER.SET_SORTBY:
        return {
          ...state,
          sortBy: action.payload
        };
  
      default:
        return state;
    }
  }