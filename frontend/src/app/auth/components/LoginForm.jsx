"use client"
import React,{useState} from 'react'
import { loginUser } from '../api/user.api';
import { login } from '@/store/auth/slice';
import { useRouter } from 'next/navigation';
import {useDispatch, useSelector} from 'react-redux';
import Link from 'next/link';

function LoginForm() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = async () => {
        setLoading(true);
        setError('');

        try {
            const data = await loginUser(name,password);
            dispatch(login(data.name))
            router.push('/');
            setLoading(false);
            console.log("signin success")
        } catch (err) {
            setLoading(false);
            setError(err.message || 'Login failed. Please check your credentials.');
            console.log(error)
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
          <div className="backdrop-blur-lg bg-white/40 shadow-xl rounded-3xl px-10 py-10 max-w-md w-full border border-white/30 transition-transform duration-300 hover:scale-[1.01]">
            <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8 drop-shadow">
              🚀 Welcome Back
            </h2>
      
            {error && (
              <div className="mb-5 p-3 bg-red-200/80 text-red-900 rounded-lg text-sm font-medium">
                {error}
              </div>
            )}
      
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Username
              </label>
              <input
                className="w-full px-4 py-2 rounded-xl bg-white/70 border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                id="name"
                placeholder="Enter your username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
      
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-2 rounded-xl bg-white/70 border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                id="password"
                type="password"
                placeholder="••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
      
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-[1.02] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
      
            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-purple-600 font-medium hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      );
      
}

export default LoginForm
