import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice'
import rideReducer from './Rides/slice'

export const store = configureStore({
    reducer: {
      auth: authReducer,
      ride:rideReducer,
    },
  });
  
  export default store;