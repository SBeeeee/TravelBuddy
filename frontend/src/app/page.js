"use client"
import Private from '@/utils/Private';
import React from 'react'
import { useSelector } from 'react-redux'


export default function page() {
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  return (
    <div>
      <Private>
      hello {user?.username || "okay"}

      </Private>
    </div>
  )
}
