import React, { useReducer } from 'react';
import axios from 'axios';

import CustomerContext from './customerContext';
import customerReducer from './customerReducer'


import {
  GET_CUSTOMERS,
  CUSTOMER_ERROR
} from '../type';

const CustomerState = props => {
  const initialState = {
    customers:[],
    
    error: null
  }

  const [state, dispatch] = useReducer(customerReducer, initialState);

  // Get all expense
  const getCustomers = async () => {
  
    try {
      const res = await axios.get('/api/customer');
      dispatch({
        type: GET_CUSTOMERS, payload: res.data.data
      });
    } catch (err) {
      dispatch({type: CUSTOMER_ERROR, payload: err.response.data.error});
    }
  }

  
  return(
    <CustomerContext.Provider
    value={{
      customers: state.customers,
      error: state.error,
      getCustomers
    }}
    >
      {props.children}
    </CustomerContext.Provider>
  )
}

export default CustomerState;