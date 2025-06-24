import React from 'react'
import CreateForm from './components/CreateForm'
import Private from '@/utils/Private'

export default function page() {
  return (
    <div>
      <Private><CreateForm/></Private>
      
    </div>
  )
}
