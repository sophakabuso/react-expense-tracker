import React from "react";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../config/firebase";
import { useState } from "react";

function SignUp(){

    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    const register = (() => {
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            alert("Registration Succes");
        }).catch((error)=>{
            console.log(error.message)

        })

    })

    return (
        <div>
            <h1>Sign up page</h1>

            <input type="text" placeholder="Enter Email" 
              onChange={(event)=>setEmail(event.target.value)}/><br></br>
            <input type="password" placeholder="Enter password"
              onChange={(event)=>setPassword(event.target.value)} /><br></br><br></br>
            <button onClick={register}>Sign Up</button>
        </div>

    )

    
}

export default SignUp;