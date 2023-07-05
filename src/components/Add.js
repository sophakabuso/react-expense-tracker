import React from 'react';
import { useState } from 'react';

function AddTransaction(props) {
  const [transactionItem, setTransactionItem] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('');

  const add = () => {
    // Call the add function passed as props and pass the transaction details
    props.add(transactionItem, amount, transactionType);
  };

  return (
    <div>
      <h1>Add a new transaction</h1>

      {/* Input fields to enter transaction details */}
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
        {/* Dropdown to select transaction type */}
        <option>Income</option>
        <option>Expense</option>
      </select>
      <br />
      <button onClick={add}>Add a transaction</button>
    </div>
  );
}

export default AddTransaction;
;