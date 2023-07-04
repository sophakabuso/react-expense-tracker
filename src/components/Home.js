import React from 'react';

import AddTransaction from "./Add"
import DisplayTransaction from "./DisplayTransaction"

function Home (props){
    return(
        <div>
            
            <AddTransaction add={props.add}/>
            <DisplayTransaction transactions={props.transactions}/>

        </div>
    )
}

export default Home;