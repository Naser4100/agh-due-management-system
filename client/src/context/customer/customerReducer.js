import {
  GET_CUSTOMERS,
  DELETE_CUSTOMER,
  CUSTOMER_ERROR
} from '../type';

export default (state, action) => {
  switch(action.type){
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(customer => customer._id !== action.payload)
      }
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload
      }
    default:
      return state;
  }
}