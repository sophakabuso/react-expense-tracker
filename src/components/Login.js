import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signUp } from '../authReducer/auth';
import {auth} from '../config/firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  
  return (
    <div className='container'>
      <h1>Login page</h1>

      <input
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br></br> <br></br>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button onClick={()=> dispatch(signIn(email, password))}>Login</button>
      <br /><br />

      <link to="/signUp">Don't have an account : sign up</link>
      
    </div>
  );
}

export default Login;
