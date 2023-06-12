import React from 'react';
import {useHistory,Link} from "react-router-dom"

function Login() {
    
    const history =useHistory(); 
    const goToHomePage = (()=>{
        history.push('/home')

    })

    return(

        <div>
            <h1>Login page</h1>

            <button onClick={goToHomePage}>Go to home page</button><br></br><br></br>
            <Link to="signUp">Don't have an account:Sign</Link>
            
        </div>
    ) 
}

export default Login;