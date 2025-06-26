"use client"
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { login, logout, setAuthload } from '@/store/auth/slice';
import { CheckAuth } from './CheckAuth';
import Link from "next/link";

export default function Private({ children }) {
  const dispatch = useDispatch();
  const { isAuthenticated, user, authload } = useSelector((state) => state.auth);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const verify = async () => {
      // Prevent multiple auth checks
      if (authChecked) return;
      
      dispatch(setAuthload(true));
      
      try {
        const userData = await CheckAuth();
        if (userData) {
          dispatch(login(userData.username));
        } else {
          dispatch(logout());
        }
      } catch (err) {
        console.log("Authentication failed:", err);
        dispatch(logout());
      } finally {
        dispatch(setAuthload(false));
        setAuthChecked(true);
      }
    };

    verify();
  }, [dispatch, authChecked]);

  // Show loading state
  if (authload || !authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center text-gray-600 text-xl">
          🔄 Checking authentication...
        </div>
      </div>
    );
  } 
  
  // Show unauthorized state
  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center space-y-4 max-w-md">
          <h2 className="text-2xl font-bold text-gray-800">🚫 Access Denied</h2>
          <p className="text-gray-600">You must be logged in to view this page.</p>
          <Link
            href="/auth/login"
            className="inline-block px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  // Render protected content
  return <>{children}</>;
}
