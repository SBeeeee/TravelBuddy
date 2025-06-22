import React from 'react'
import Header from './components/Header'
import SearchFilters from './components/SearchFilters'
import CardsSection from './components/CardsSection'

export default function page() {
  return (
    <div>
        <Header/>
        <SearchFilters/>
   <CardsSection/>

    </div>
  )
}
