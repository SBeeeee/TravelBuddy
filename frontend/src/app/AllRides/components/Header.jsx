import React from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 flex-wrap mb-4">
    <div>
      <div className="text-black font-bold text-4xl mt-2 ">
            Find Travel Plans
      </div>
      <p className="text-gray-500 mt-2 mb-2">Browse and join travel plans that match your schedule</p>
    </div>
    <Link href="/create" className="flex bg-blue-500  justify-center items-center p-2 gap-1 shadow-lg rounded-lg "><Plus />Create New Plan</Link>
    </div>
  )
}
