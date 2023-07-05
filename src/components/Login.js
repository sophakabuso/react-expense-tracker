import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { auth } from '../config/firebase';


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToHomePage = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Login Success');
        history.push('/home');
      })
      .catch((error) => {
        // Handle login error
      });
  };

  return (
    <div>
      <h1>Login page</h1>

      {/* Input fields to enter email and password */}
      <input
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <br></br>
      <button onClick={goToHomePage}>Login</button>
      <br></br>
      <br></br>
      <Link to="/forgotpassword">Forgot Password</Link><br></br><br></br>
      <Link to="/signUp">Don't have an account: Sign Up</Link>
    </div>
  );
}

export default Login;
