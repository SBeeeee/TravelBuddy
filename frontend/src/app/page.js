"use client"
import React from 'react'
import { useSelector } from 'react-redux'


export default function page() {
  const user = useSelector((state) => state.auth.user);
  console.log(user)
  return (
    <div>
      hello {user}
    </div>
  )
}
