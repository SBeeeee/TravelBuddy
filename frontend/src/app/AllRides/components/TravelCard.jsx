"use client"
import React from "react"
import { getinfo } from "./helper"
import { MapPin, Calendar, Clock, Users, ArrowRight, Star } from "lucide-react"
import { formatDate } from "./helper"
import Link from "next/link"

export default function TravelCard({ plan }) {
  const { icon, color } = getinfo(plan.transport)
  
  

  return (
    <div className="overflow-hidden  rounded-xl shadow-lg border border-gray-500 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 mx-2">
      {/* Gradient Header */}
      <div className={`bg-gradient-to-r ${color} p-6 text-white relative`}>
        {/* Background Circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30 backdrop-blur-sm">
              {icon} {plan.transport}
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">₹{plan.price}</div>
              <div className="text-sm text-white/80">per person</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-4 w-4 text-white/80" />
                <span className="text-sm font-medium">{plan.origin}</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-white/60"></div>
                <ArrowRight className="mx-2 h-4 w-4 text-white/80" />
                <div className="w-8 h-0.5 bg-white/60"></div>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <MapPin className="h-4 w-4 text-white/80" />
                <span className="text-sm font-medium">{plan.destination}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-100 p-2 rounded-lg">
              <Calendar className="h-4 w-4 text-gray-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Date</div>
              <div className="font-medium">{formatDate(plan.date)}</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="bg-gray-100 p-2 rounded-lg">
              <Clock className="h-4 w-4 text-gray-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Time</div>
              <div className="font-medium">{plan.time}</div>
            </div>
          </div>
        </div>

        {/* User Info & Seats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold ring-2 ring-gray-100">
              {plan.user.name.charAt(0)}
            </div>
            <div>
              <div className="font-medium text-gray-900">{plan.user.name}</div>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-500">{plan.user.rating}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
            <Users className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">{plan.seats} seats</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 p-6 border-t border-gray-100">
        <Link
          href={`/travel-plan/${plan.id}`}
          className="block w-full text-center text-white font-medium py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          View Details
          <ArrowRight className="inline ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
