import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../authreducer/Auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
