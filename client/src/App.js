import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import Customers from './components/customer/Customers';
import CustomerState from './context/customer/CustomerState'

function App() {
  return (
    <CustomerState>
      <div className="App">
        <Container>
          <Customers />
        </Container>
      </div>
    </CustomerState>
  );
}

export default App;
