import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import './App.css';
import Customers from './components/customer/Customers';
import CustomerState from './context/customer/CustomerState'
import AddCustomer from './components/customer/AddCustomer';
import { Home } from './components/pages/Home';

function App() {
  return (
    <CustomerState>
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path = '/' component={Home}/>
              <Route exact path = '/add-customer' component={AddCustomer}/>
              <Route exact path = '/customers' component={Customers}/>
            </Switch>
          </BrowserRouter>
      </div>
    </CustomerState>
  );
}

export default App;
