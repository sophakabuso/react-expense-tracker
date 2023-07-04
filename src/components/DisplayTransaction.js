import React from "react";
function DisplayTransaction(props){
    return (
  <div>
    <h4>History of transactions</h4>

    {/* Mapping over the 'transactions' array */}
    {props.transactions.map((data) => (
      <div key={data.id}>
        <div className="list-item">
          {/* Displaying the 'transactionItem' */}
          <div>
            <h6>{data.transactionItem}</h6>
          </div>

          {/* Displaying the 'amount' */}
          <div>
            <h6>{data.amount}</h6>
          </div>

          {/* Displaying the 'transactionType' */}
          <div>
            {/* Conditional rendering based on 'transactionType' */}
            <div>
            <h6>{data.transactionType}</h6>
            </div>

            {data.transactionType === "Expense" ? (
              <div className="expenseIndicator"> </div>
            ) : (
              <div className="incomeIndicator"></div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

}

export default DisplayTransaction;