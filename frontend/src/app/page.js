"use client"
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import React from 'react'
import { useSelector } from 'react-redux'


export default function page() {
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  return (
    <div>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}
