"use client";
import React, { useEffect, useState } from "react";
import { updateride } from "./api/myride.api";

export default function EditModal({ isOpen, onClose, ride, onUpdate }) {
  const [formdata, setFormdata] = useState({
    origin: "",
    destination: "",
    date: "",
    time: "",
    transport: "",
    seats: 3,
    price: 400,
    description: "",
  });

  useEffect(() => {
    if (ride) {
      setFormdata({ ...ride });
    }
  }, [ride]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: name === "seats" || name === "price" ? Number(value) : value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await updateride(ride._id, formdata);
      if (res.success) {
        alert("Ride updated successfully!");
        onUpdate(res.ride); // Pass updated ride back to parent
        onClose(); // Close modal
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert("Something went wrong while updating the ride.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl shadow-blue-400 overflow-auto max-h-[90vh]">
        <div className="mx-auto w-full text-center text-2xl font-bold py-4">
          Edit Travel Plan
        </div>
        <form className="p-6 space-y-6" onSubmit={handleUpdate}>
          {/* Form content same as CreateForm */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Origin</label>
              <input
                type="text"
                name="origin"
                required
                value={formdata.origin}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Destination</label>
              <input
                type="text"
                name="destination"
                required
                value={formdata.destination}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                required
                value={formdata.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                name="time"
                value={formdata.time}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Transport</label>
              <select
                name="transport"
                value={formdata.transport}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              >
                <option value="">Select</option>
                <option value="Cab">Cab</option>
                <option value="Auto">Auto</option>
                <option value="Train">Train</option>
                <option value="Bus">Bus</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-sm font-medium text-gray-700">Seats</label>
                <input
                  type="number"
                  name="seats"
                  value={formdata.seats}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={formdata.price}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                rows={3}
                value={formdata.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 resize-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-purple-600"
            >
              Confirm Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
