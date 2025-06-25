"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CheckAuth } from '@/utils/CheckAuth';
import { login, logout } from '@/store/auth/slice';
import { CircleUser } from 'lucide-react';

function User() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const verify = async () => {
        try {
            const userData = await CheckAuth();
            if (userData) {
                dispatch(login(userData));
            } else {
                dispatch(logout());
            }
        }
        catch (error) {
            console.log("Authentication failed:", error);
            dispatch(logout());
        }
    }
    useEffect(() => {
        verify();
    }, [])

    if (user === null) {
        return (
            <div>
                <CircleUser size={32} className="text-blue-700" />
            </div>
        )
    }
    return (
        <div>

            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 text-white flex items-center justify-center font-bold ring-2 ring-gray-100">
                {user.username.charAt(0).toUpperCase()}
            </div>
        </div>
    )
}

export default User
