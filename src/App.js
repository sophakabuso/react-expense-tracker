import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import DisplayTransaction from './components/DisplayTransaction';
import AddTransaction from './components/Add';

function App() {

   
  const [transactions, setTransactions]=useState([]);

  const add = (transactionItem, amount, transactionType)=>{
    setTransactions((transactions)=>[...transactions,{transactionItem:transactionItem,amount:amount ,transactionType:transactionType }]);
    console.log(transactions);
  };   
  return (
    <div className="container-app">
     <Home add={add} transactions={transactions}/>
    </div> 
  );
}

export default App;
