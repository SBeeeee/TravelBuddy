"use client";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { CircleUser } from "lucide-react";
import Logout from "./Logout";

export default function UserDropdownModal() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="absolute top-16 right-4 w-64 bg-white rounded-xl shadow-xl p-4 border">
      {user ? (
        <>
          <p className="text-sm text-gray-600">Welcome,</p>
          <h2 className="text-lg font-semibold text-blue-600 mb-4">
            {user.username}
          </h2>
          <div className="flex flex-col gap-2">
            <Link
              href="/AllRides"
              className="bg-blue-100 text-blue-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition"
            >
              Find Rides
            </Link>
            <Link
              href="/create"
              className="bg-green-100 text-green-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-green-200 transition"
            >
              Post Your Ride
            </Link>
            <Link
              href="/my-plans"
              className="bg-purple-100 text-purple-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-200 transition"
            >
              My Plan
            </Link>
            <Logout/>
          </div>
        </>
      ) : (
        <>
          <p className="text-gray-600 mb-2">
            You're not logged in. Please login or sign up.
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href="/auth/login"
              className="bg-blue-100 text-blue-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="bg-green-100 text-green-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-green-200 transition"
            >
              Signup
            </Link>
            <Link
              href="/AllRides"
              className="bg-gray-100 text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition"
            >
              Find Rides
            </Link>

          </div>
        </>
      )}
    </div>
  );
}
