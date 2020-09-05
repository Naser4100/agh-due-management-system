import React, { useReducer } from 'react';
import axios from 'axios';

import CustomerContext from './customerContext';
import customerReducer from './customerReducer'


import {
  GET_CUSTOMERS,
  CUSTOMER_ERROR,
  ADD_CUSTOMER,
  DELETE_CUSTOMER
} from '../type';

const CustomerState = props => {
  const initialState = {
    customers:[],
    
    error: null
  }

  const [state, dispatch] = useReducer(customerReducer, initialState);

  // Delete Customer
  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`/api/customer/${id}`);
      dispatch({ type: DELETE_CUSTOMER, payload: id });
    } catch (err) {
      dispatch({ type: CUSTOMER_ERROR, payload: err.response.data.error });
    }
  }

  // Add customer
  const addCustomer = async (customer) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/customer", customer, config);
      dispatch({ type: ADD_CUSTOMER, payload: res.data.data });
    } catch (err) {
      dispatch({ type: CUSTOMER_ERROR, payload: err.response.data.error });
    }
  }

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
      getCustomers,
      addCustomer,
      deleteCustomer
    }}
    >
      {props.children}
    </CustomerContext.Provider>
  )
}

export default CustomerState;