"use client"

import { MapPin, Users, Car } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">How It Works</h2>
        <p className="text-gray-600 text-sm sm:text-base mb-12">
          Three simple steps to find your perfect travel companion
        </p>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-all">
            <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Post Your Journey</h3>
            <p className="text-sm text-gray-600">
              Share your travel details including origin, destination, date, time, and preferred mode of transport.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-all">
            <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Travel Buddies</h3>
            <p className="text-sm text-gray-600">
              Browse and search for existing travel plans that match your schedule and destination preferences.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-all">
            <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-rose-500 to-red-500 text-white">
              <Car className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Connect & Travel</h3>
            <p className="text-sm text-gray-600">
              Join a travel group, connect with the organizer, and enjoy your journey together safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
