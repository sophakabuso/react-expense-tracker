import React from "react";
import { useState } from "react";
import { auth } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword(){
    // Declare the state variable to store the email entered by the user
    const [email, setPassword] = useState('');

    // Define the function to handle the password reset
    const forgotPassword = () => {
        // Call the sendPasswordResetEmail function from Firebase auth module
        sendPasswordResetEmail(auth, email)
          .then(() => {
              alert("Please check your email for further instructions");
          })
          .catch((error) => {
              // Handle any errors that occur during the password reset process
              console.log(error);
          });
    };

    // Render the component JSX
    return (
        <div className="container">
            <h4>Reset your password</h4><br></br>
             
            <input
                type="text"
                placeholder="Enter Email"
                onChange={(e) => setPassword(e.target.value)}
            /><br></br>

            <button onClick={forgotPassword}>Reset Password</button>
        </div>
    );
}

export default ForgotPassword;

