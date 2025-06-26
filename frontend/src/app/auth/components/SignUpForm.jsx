"use client"
import React, { useState } from 'react';
import { registerUser } from '../api/user.api';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '@/store/auth/slice';
import Link from 'next/link';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const data = await registerUser(formData.username, formData.password, formData.phone);
      dispatch(login(data.name)); // login the user directly after signup
      router.push('/');
    } catch (err) {
      setError(err.message || 'Signup failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 p-4">
      <div className="backdrop-blur-lg bg-white/40 shadow-xl rounded-3xl px-10 py-10 max-w-md w-full border border-white/30 transition-transform duration-300 hover:scale-[1.01]">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8 drop-shadow">
          ✨ Create Account
        </h2>

        {error && (
          <div className="mb-5 p-3 bg-red-200/80 text-red-900 rounded-lg text-sm font-medium">
            {error}
          </div>
        )}

        <div className="mb-5">
          <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-white/70 border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-white/70 border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-white/70 border border-gray-300 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            placeholder="••••••••••"
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
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-purple-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
