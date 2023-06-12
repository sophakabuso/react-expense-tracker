import React from "react";
function DisplayTransaction(props){
    return(
        <div>
            <h4>History of transaction</h4>

            {props.transactions.map((data)=>(
               <div> 
                 <div class="list-item">
                    <div>
                    <h6>{data.transactionItem}</h6>
                    </div>
                    <div>
                    <h6>{data.amount}</h6>
                    </div>
                    <div>
                        {data.transactionType ==="Expense"?<div className="expenseIndicator"> </div>: <div className="incomeIndicator"></div>}
                    <h6>{data.transactionType}</h6>
                    </div>
                 </div>
                </div>
))}

        </div>
    )
}

export default DisplayTransaction;