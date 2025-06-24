"use client"
import React,{useEffect} from 'react'

import {useSelector,useDispatch} from "react-redux"
import TravelCard from './TravelCard'
import { getAllRides } from '../api/rides.api'
import { setRides,setQuery } from '@/store/Rides/slice'
import { setLoading } from '@/store/auth/slice'

export default function CardsSection() {
  const dispatch=useDispatch();
  const {rides,Query}=useSelector((state)=>state.ride);
  const {isLoading}=useSelector((state)=>state.auth);
  const getrides = async () => {
    dispatch(setLoading(true));  // ✅ Start loading
    try {
      const data = await getAllRides(Query);
      dispatch(setRides({rides:data.rides,totalPages: data.totalPages,}));
    } catch (error) {
      console.log("Error fetching rides", error);
    } finally {
      dispatch(setLoading(false)); // ✅ Stop loading after fetch or error
    }
  }
  useEffect(()=>{
    getrides();
    
  },[Query])

  if(isLoading){
    return(
    <div>...Loading</div>)
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
    {rides.map((plan) => (
      <TravelCard key={plan._id} plan={plan} />
    ))}
  </div>
  )
}
