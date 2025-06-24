import { createSlice } from "@reduxjs/toolkit";

const initialState={
    rides:[],
    myrides:[],
    totalPages: 1,
    Query:{page:1,
    limit:10,
    origin:"",
    destination:"",
    date:"",
    transport:"Any mode",
    }
}

const rideSlice=createSlice({
    name:'rides',
    initialState,
    reducers:{
        setRides:(state,action)=>{
            state.rides = action.payload.rides;
            state.totalPages = action.payload.totalPages;
        },
        setQuery:(state,action)=>{
            state.Query={
                ...state.Query,
                ...action.payload,
            }
        },
        setMyRides:(state,action)=>{
            state.myrides=action.payload;
        }
    }
})

export const {setRides,setQuery,setMyRides}=rideSlice.actions;
export default rideSlice.reducer;