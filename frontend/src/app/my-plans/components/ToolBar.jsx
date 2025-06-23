"use client"
import React, { useState } from "react"
import Posted from "./Posted"
import Saved from "./Saved"

export default function ToolBar() {
  const [present, setPresent] = useState("Posted")

  return (
    <div>
      <div className="bg-gray-100 text-gray-800 flex justify-around w-64 px-1 py-1  my-2">
        <div
          className={`${
            present === "Posted"
              ? "bg-white font-semibold text-black"
              : "text-gray-500 hover:bg-white"
          } text-sm px-3 py-1 rounded-xl cursor-pointer transition`}
          onClick={() => setPresent("Posted")}
        >
          Posted
        </div>
        <div
          className={`${
            present === "Saved"
              ? "bg-white font-semibold text-black"
              : "text-gray-500 hover:bg-white"
          } text-sm px-3 py-1 rounded-xl cursor-pointer transition`}
          onClick={() => setPresent("Saved")}
        >
          Saved
        </div>
      </div>
      {present==="Posted"?(<Posted/>):(<Saved/>)}
    </div>
  )
}
