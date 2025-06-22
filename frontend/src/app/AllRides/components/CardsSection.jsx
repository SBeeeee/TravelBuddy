"use client"
import React from 'react'
import { demodata } from './helper'
import TravelCard from './TravelCard'

export default function CardsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
    {demodata.map((plan) => (
      <TravelCard key={plan.id} plan={plan} />
    ))}
  </div>
  )
}
