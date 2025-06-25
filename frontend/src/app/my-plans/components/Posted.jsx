"use client"
import React,{useEffect} from "react"
import MyTravelCard from "./MyTravelCards"
import { getmyrides } from "./api/myride.api"
import { useDispatch,useSelector } from "react-redux";
import { setLoading } from "@/store/auth/slice";
import { setMyRides } from "@/store/Rides/slice";



export default function Posted() {
  const dispatch=useDispatch();
  const {myrides}=useSelector((state)=>state.ride);
  const {isLoading}=useSelector((state)=>state.auth);
  const getrides=async()=>{
    dispatch(setLoading(true));
  
  try{
    const data=await getmyrides();
    dispatch(setMyRides(data.rides))
  }
  catch(error){
    console.log("Error fetching rides", error);
  }
  finally {
    dispatch(setLoading(false)); // ✅ Stop loading after fetch or error
  }
  }
useEffect(()=>{
  getrides();
  
},[])
if(isLoading){
  return(
    <div>Loading.....</div>
  )
}

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {myrides.map((plan) => (
        <MyTravelCard key={plan._id} plan={plan} />
      ))}
    </div>
  )
}
