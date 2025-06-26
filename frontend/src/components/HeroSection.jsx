"use client"

import { BadgeCheck, Search, Plus } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24 overflow-hidden">
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 [background-size:28px_28px] bg-[radial-gradient(circle,_#e2e8f0_1.5px,_transparent_1px)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center mb-6 bg-white/10 text-lg font-medium px-5 py-1.5 rounded-full border border-white/20 text-white shadow-sm backdrop-blur">
          <BadgeCheck className="h-4 w-4 mr-2 text-yellow-300" />
        Focused on Travel & Trust
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight tracking-tight">
          Travel Smart,{" "}
          <span className="text-yellow-300">Save More</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          Share rides with fellow VITians heading to Chennai, Bangalore, and more. Organize better, travel safer — no more WhatsApp chaos.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
          <Link
            href="/AllRides"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-lg shadow hover:bg-gray-100 transition"
          >
            <Search className="h-5 w-5 mr-2" />
            Find a Ride
          </Link>
          <Link
            href="/create"
            className="inline-flex items-center justify-center px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
          >
            <Plus className="h-5 w-5 mr-2" />
            Post a Ride
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-white/90 text-base sm:text-lg font-semibold">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">1000+</div>
            Active Users
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">500+</div>
            Trips Completed
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">₹50K+</div>
            Money Saved
          </div>
        </div>
      </div>
    </section>
  )
}
