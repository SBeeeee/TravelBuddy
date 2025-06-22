import React from "react";
import { Search } from "lucide-react";

export default function SearchFilters() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg  mx-4">
      <form className="flex flex-col gap-4">

        {/* Top Row Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* From */}
          <div className="w-full">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              <span>📍</span> From
            </label>
            <input
              type="text"
              placeholder="VIT Vellore"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* To */}
          <div className="w-full">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
              <span>📍</span> To
            </label>
            <input
              type="text"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Transport */}
          <div className="w-full">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Transport</label>
            <select className="w-full px-4 py-3 border border-blue-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
              <option>Any mode</option>
              <option>Cab</option>
              <option>Auto</option>
              <option>Train</option>
              <option>Flight</option>
            </select>
          </div>
        </div>

        {/* Bottom Buttons Row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-2 gap-3">
          {/* Reset */}
          <button
            type="button"
            className="text-sm text-gray-600 hover:underline"
          >
            Reset Filters
          </button>

          {/* Search */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-md text-white text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
          >
            <Search className="w-4 h-4" /> Search Rides
          </button>
        </div>
      </form>
    </div>
  );
}
