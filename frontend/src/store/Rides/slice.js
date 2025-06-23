import { createSlice } from "@reduxjs/toolkit";

const initialState={
    rides:null,
}

const rideSlice=createSlice({
    name:'rides',
    initialState,
    reducers:{
        setRides:(state,action)=>{
            state.rides=action.payload;
        }
    }
})

export const {setRides}=rideSlice.actions;
export default rideSlice.reducer;