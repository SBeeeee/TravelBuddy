import React from 'react'
import Header from './components/Header'
import ToolBar from './components/ToolBar'
import Private from '@/utils/Private'

export default function page() {
  return (
    <div>
    <Private>
   <Header/>
   <ToolBar/>
   </Private>
    </div>
  )
}
