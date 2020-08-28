import {
  GET_CUSTOMERS
} from '../type';

export default (state, action) => {
  switch(action.type){
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload
      }
    default:
      return state;
  }
}