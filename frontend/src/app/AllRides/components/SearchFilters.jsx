"use client"
import React,{useState} from "react";
import { Search } from "lucide-react";
import { useDispatch,useSelector } from "react-redux";
import { setQuery,setRides } from "@/store/Rides/slice";
import { setLoading } from "@/store/auth/slice";
import { getAllRides } from "../api/rides.api";
import Pagination from "./Pagination";

export default function SearchFilters() {
  const dispatch = useDispatch();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [transport, setTransport] = useState("Any mode");
  const {totalPages}=useSelector((state)=>state.ride);

  const handleSearch = async (e) => {
    e.preventDefault();

    const queryPayload = {
      origin,
      destination,
      date,
      transport,
      page: 1, // reset to page 1 on every new search
      limit: 10,
    };
    dispatch(setQuery(queryPayload));
    dispatch(setLoading(true));
    try {
      const data = await getAllRides(queryPayload);
      dispatch(setRides({rides:data.rides,totalPages}));
    } catch (err) {
      console.error("Error fetching filtered rides:", err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const resetFilters = () => {
    setOrigin("");
    setDestination("");
    setDate("");
    setTransport("Any mode");
    dispatch(setQuery({ origin: "", destination: "", date: "", transport: "Any mode", page: 1 }));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mx-4">
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Origin */}
          <div className="w-full">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              <span>📍</span> From
            </label>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="VIT Vellore"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Destination */}
          <div className="w-full">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              <span>📍</span> To
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Chennai"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Date */}
          <div className="w-full">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              <span>📅</span> Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Transport */}
          <div className="w-full">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Transport</label>
            <select
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
              className="w-full px-4 py-3 border border-blue-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option>Any mode</option>
              <option>Cab</option>
              <option>Auto</option>
              <option>Train</option>
              <option>Flight</option>
              <option>Bus</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-2 gap-3">
          <button
            type="button"
            onClick={resetFilters}
            className="text-sm text-gray-600 hover:underline"
          >
            Reset Filters
          </button>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-md text-white text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
          >
            <Search className="w-4 h-4" /> Search Rides
          </button>
        </div>
      </form>
      <Pagination/>
    </div>
  
  );
}
