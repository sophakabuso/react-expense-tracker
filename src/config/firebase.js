import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7i-ZjiD4g-SqYZrQxz97inZMn5zPKks4",
  authDomain: "expense-tracker-21b02.firebaseapp.com",
  projectId: "expense-tracker-21b02",
  storageBucket: "expense-tracker-21b02.appspot.com",
  messagingSenderId: "851338921371",
  appId: "1:851338921371:web:4d3be4b66c6304b9db0d3e",
  measurementId: "G-ZC2LXY0EZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app)

export{auth, db}

