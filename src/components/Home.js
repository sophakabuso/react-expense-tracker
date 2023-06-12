import React from 'react';

import AddTransaction from "./Add"
import DisplayTransaction from "./DisplayTransaction"

function Home (props){
    return(
        <div>
            <DisplayTransaction transactions={props.transactions}/>
            <AddTransaction add={props.add}/>

        </div>
    )
}

export default Home;