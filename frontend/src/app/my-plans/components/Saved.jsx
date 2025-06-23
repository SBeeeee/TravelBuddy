import React from 'react'
import TravelCard from '@/app/AllRides/components/TravelCard'
import { demodata } from '@/app/AllRides/components/helper'

export default function Saved() {
  return (
    
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
    {demodata.map((plan) => (
      <TravelCard key={plan.id} plan={plan} />
    ))}
  </div>
    
  )
}
