import React from 'react'
import TravelCard from './components/TravelCard'
import Header from './components/Header'
import SearchFilters from './components/SearchFilters'

export default function page() {
  return (
    <div>
        <Header/>
        <SearchFilters/>
      <TravelCard/>

    </div>
  )
}
