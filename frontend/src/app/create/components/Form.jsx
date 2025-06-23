"use client"
import React, { useState } from "react"
import { createRide } from "../api/createride.api"

export default function Form() {
  const [formdata, setFormdata] = useState({
    origin: "",
    destination: "",
    date: "",
    time: "",
    transport: "",
    seats: 3,
    price: 400,
    description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormdata((prev) => ({
      ...prev,
      [name]: name === "seats" || name === "price" ? Number(value) : value,
    }))
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await createRide(formdata)
      console.log("Ride created successfully:", response)
      alert("suuccessfully created ride")
      
    } catch (error) {
      console.error("Error creating ride:", error)
    }
  }

  return (
    <div>
      <form className="p-6 space-y-6" onSubmit={handlesubmit}>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Journey Details</h2>
          <p className="text-sm text-gray-500">Provide information about your planned journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Origin & Destination */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <input type="radio" checked readOnly />
              Origin
            </label>
            <input
              type="text"
              required
              name="origin"
              value={formdata.origin}
              onChange={handleChange}
              placeholder="Where are you starting from?"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <input type="radio" checked readOnly />
              Destination
            </label>
            <input
              type="text"
              required
              name="destination"
              value={formdata.destination}
              onChange={handleChange}
              placeholder="Where are you going?"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Date & Time */}
          <div>
            <label className="text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              required
              name="date"
              value={formdata.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              value={formdata.time}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Mode, Seats, Price */}
          <div>
            <label className="text-sm font-medium text-gray-700">Mode of Transport</label>
            <select
              name="transport"
              value={formdata.transport}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select transport</option>
              <option value="Cab">Cab</option>
              <option value="Auto">Auto</option>
              <option value="Train">Train</option>
              <option value="Bus">Bus</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-sm font-medium text-gray-700">Available Seats</label>
              <input
                type="number"
                name="seats"
                value={formdata.seats}
                onChange={handleChange}
                placeholder="Number of seats"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Price per Person (₹)</label>
              <input
                type="number"
                name="price"
                value={formdata.price}
                onChange={handleChange}
                placeholder="Cost sharing amount"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <input type="radio" checked readOnly />
              Additional Information
            </label>
            <textarea
              name="description"
              value={formdata.description}
              onChange={handleChange}
              placeholder="Add any additional details about your journey, meeting point, luggage restrictions, etc."
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-purple-600 text-white rounded-md transition"
          >
            Create Travel Plan
          </button>
        </div>
      </form>
    </div>
  )
}
