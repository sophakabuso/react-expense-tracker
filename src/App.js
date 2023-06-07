import './App.css';
import { useState } from 'react';

import AddTransaction from './components/Add';

function App() {

   
  const [transactions, setTransactions]=useState([]);

  const add = (transactionItem, amount, transactionType)=>{
    setTransactions((transactions)=>[...transactions,{transactionItem:transactionItem,amount:amount ,transactionType:transactionType }]);
    console.log(transactions);
  };  
  return (
    <div className="container-app">
     <AddTransaction add={add}/>
    </div> 
  );
}

export default App;
