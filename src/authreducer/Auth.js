import { createSlice } from '@reduxjs/toolkit';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(); // Get the Firebase auth instance

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      password: ''
    },
    registrationSuccess: false // Flag to indicate successful registration
  },
  reducers: {
    signUp: (state, action) => {
      createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password)
        .then(() => {
          state.registrationSuccess = true; // Set the registrationSuccess flag
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    signIn: (state, action) => {
      signInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
        .then(() => {
          state.user = { email: action.payload.email, password: action.payload.password };
          state.loginSuccess = true; // Set the loginSuccess flag
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }
});

export const { signUp, signIn } = authSlice.actions;
export default authSlice.reducer;
