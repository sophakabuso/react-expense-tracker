// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NoPageFound from './components/NoPageFound';
import ForgotPassword from './components/ForgotPassword';
import Currency from './components/Currency';

function App() {
  const [transactions, setTransactions] = useState([]);

  const getTransaction = async () => {
    try {
      // Retrieve documents from the 'transactions' collection in Firebase Firestore
      const querySnapshot = await getDocs(collection(db, 'transactions'));

      // Map the retrieved document data and include the document ID
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Set the transactions state with the retrieved data
      setTransactions(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Call the getTransaction function once, on component mount
    getTransaction();
  }, []);

  const add = (transactionItem, amount, transactionType) => {
    // Add a new transaction to the transactions state
    setTransactions((transactions) => [
      ...transactions,
      {
        transactionItem: transactionItem,
        amount: amount,
        transactionType: transactionType,
      },
    ]);
  };

  return (
    <Router>
      <div className="container-app">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            {/* Render the Home component and pass the add function and transactions as props */}
            <Home add={add} transactions={transactions} />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/currency">
            <Currency />
          </Route>
          <Route path="*">
            <NoPageFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
