import React from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/firebase";
import { useState } from "react";
import { UseSelector, useDispatch} from "react-redux";
import { signUp } from "../authreducer/Auth";

function SignUp() {
  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

 /* const register = () => {
    // Create a user with email and password using Firebase authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Registration Success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }*/

  return (
    <div>
      <h1>Sign up page</h1>

      {/* Input fields to enter email and password */}
      <input
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <br></br>
      <button onClick={()=>dispatch(signUp(email,password))}>Sign Up</button>
    </div>
  );
}

export default SignUp;
