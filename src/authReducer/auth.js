import { createSlice } from '@reduxjs/toolkit';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth} from '../config/firebase';
import { useHistory } from 'react-router-dom';

const auth = getAuth(); // Get the Firebase auth instance

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      password: ''
    },
    
  },
  reducers: {
    signUp: (state, action) => {
      createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password)
        .then(() => {
          alert("Registration Success")
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    signIn: (state, action) => {
      signInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
        .then(() => {
          const history = useHistory();
          alert("Login Success")
          history.pushState('/home');
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }
});

export const { signUp, signIn } = authSlice.actions;
export default authSlice.reducer;
