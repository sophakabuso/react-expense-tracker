import React from 'react';
import AddTransaction from './Add';
import DisplayTransaction from './DisplayTransaction';

function Home(props) {
  return (
    <div>
      {/* Render the AddTransaction component and pass the add function as a prop */}
      <AddTransaction add={props.add} />

      {/* Render the DisplayTransaction component and pass the transactions as a prop */}
      <DisplayTransaction transactions={props.transactions} />
    </div>
  );
}

export default Home;
