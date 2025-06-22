import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
isLoading:true,
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
  },
});

export const { login,logout,setLoading } = authSlice.actions;
export default authSlice.reducer;