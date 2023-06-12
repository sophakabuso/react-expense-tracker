import React from 'react';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import DisplayTransaction from './components/DisplayTransaction';
import AddTransaction from './components/Add';
import NoPageFound from './components/NoPageFound';
import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

   
  const [transactions, setTransactions]=useState([]);

  const add = (transactionItem, amount, transactionType)=>{
    setTransactions((transactions)=>[...transactions,{transactionItem:transactionItem,amount:amount ,transactionType:transactionType }]);
    console.log(transactions);
  };   
  return (
    <Router>
    <div className="container-app">
    <Switch>
      <Route exact path= "/">
       <Login/> 
      </Route>
      <Route path="/home">
       <Home add={add} transactions={transactions}/>
      </Route> 
      <Route path="/signUp">
       <SignUp/>
      </Route>
      <Route path="*">
       <NoPageFound/>
      </Route>
     </Switch>
    </div> 
    </Router>
  );
}

export default App;
