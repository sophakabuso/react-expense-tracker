import React from 'react';
import { useState } from 'react';
import {db} from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

function AddTransaction(props) {
  const [transactionItem, setTransactionItem] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('');

  const add = (async() => {
    // Call the add function passed as props and pass the transaction details

     try {
        const docRef = await addDoc(collection(db,"transactions"),{
            transactionItem:transactionItem,
            amount:amount,
            transactionType:transactionType
        });
        alert("Add Succesful")
    } catch (error) {
        
    }
  });

  return (
    <div>
      <h1>Add a new transaction</h1>
      <input
        type="text"
        placeholder="Enter Name:"
        onChange={(event) => setTransactionItem(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Amount:"
        onChange={(event) => setAmount(event.target.value)}
      />
      <br />
      <select onChange={(event) => setTransactionType(event.target.value)}>
        <option>Income</option>
        <option>Expense</option>
      </select>
      <br />
      <button onClick={add}>Add a transaction</button>
    </div>
  );
}

export default AddTransaction;
