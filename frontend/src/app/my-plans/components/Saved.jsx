"use client"
import React from 'react'
import TravelCard from '@/app/AllRides/components/TravelCard'
import { Wrench, AlertCircle, Loader2 } from "lucide-react";

export default function Saved() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 rounded-2xl border border-blue-500 bg-blue-100/60 shadow-md text-center">
      <div className="flex items-center justify-center gap-2 text-blue-800 mb-3">
        <Wrench className="w-5 h-5 animate-bounce" />
        <h2 className="text-lg font-semibold">Feature In Progress</h2>
      </div>

      <p className="text-sm text-blue-900 mb-2">
        We ran into a few issues while finalizing this feature, but our team is actively working on resolving them.
      </p>

      <p className="text-sm text-blue-900 mb-2">
        You’ll see it live in one of the upcoming updates — we’re on it!
      </p>

      <div className="mt-4 flex items-center justify-center gap-1 text-blue-700">
        <AlertCircle className="w-4 h-4" />
        <p className="text-sm font-medium">Thanks for stopping by and checking it out!</p>
      </div>
    </div>
  )
}
