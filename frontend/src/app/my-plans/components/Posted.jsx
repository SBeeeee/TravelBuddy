"use client"
import React from "react"
import MyTravelCard from "./MyTravelCards"


const myDemoData = [
  {
    id: 1,
    origin: "VIT Vellore",
    destination: "Chennai Airport",
    date: "2025-06-26",
    time: "08:30 AM",
    transport: "cab",
    seats: 2,
    price: 500,
  },
  {
    id: 2,
    origin: "Katpadi",
    destination: "Bangalore",
    date: "2025-06-28",
    time: "05:45 PM",
    transport: "train",
    seats: 4,
    price: 350,
  },
  {
    id: 3,
    origin: "VIT Vellore",
    destination: "Pondicherry",
    date: "2025-06-29",
    time: "11:00 AM",
    transport: "auto",
    seats: 1,
    price: 150,
  },
]

export default function Posted() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {myDemoData.map((plan) => (
        <MyTravelCard key={plan.id} plan={plan} />
      ))}
    </div>
  )
}
