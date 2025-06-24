import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
isLoading:true,
authload:true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAuthload:(state,action)=>{
      state.authload=action.payload;
    }
  },
});

export const { login,logout,setLoading,setAuthload } = authSlice.actions;
export default authSlice.reducer;