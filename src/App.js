import React from 'react';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import DisplayTransaction from './components/DisplayTransaction';
import AddTransaction from './components/Add';
import NoPageFound from './components/NoPageFound';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';

function App() {
  // State to store transactions
  const [transactions, setTransactions] = useState([]);

  // Function to add a transaction
  const add = (transactionItem, amount, transactionType) => {
    setTransactions((transactions) => [
      ...transactions,
      { transactionItem: transactionItem, amount: amount, transactionType: transactionType }
    ]);
    console.log(transactions);
  };

  return (
    <Router>
      <div className="container-app">
        <Switch>
          <Route exact path="/">
            {/* Render the Login component for the root route */}
            <Login />
          </Route>
          <Route path="/home">
            {/* Render the Home component and pass the add function and transactions as props */}
            <Home add={add} transactions={transactions} />
          </Route>
          
          <Route path="/signUp">
            {/* Render the SignUp component */}
            <SignUp />
          </Route>
          <Route path="/forgotpassword">
            {/*Render the ResetPassword componet */}
          <ForgotPassword/>  
          </Route>
          <Route path="*">
            {/* Render the NoPageFound component for all other routes */}
            <NoPageFound />
          </Route  >
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
