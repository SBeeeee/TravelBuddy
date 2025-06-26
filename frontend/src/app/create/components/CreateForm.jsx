import React from 'react'
import Form from './Form'

export default function CreateForm() {
  return (
    <div >
      <div className="mx-auto hover:cursor-pointer w-96 font-bold text-center text-4xl py-2">
            Create A Travel Plan
      </div>
    <div className="text-gray-500 text-center text-xl py-2">Share your travel details to find companions for your journey</div>
    <div className="bg-white/85 max-w-4xl mx-auto rounded-2xl shadow-2xl shadow-blue-400 mt-2 ">
   <Form/>
    </div>
    </div>
  )
}
