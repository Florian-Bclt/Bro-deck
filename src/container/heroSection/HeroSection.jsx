import React from 'react'
import './heroSection.css'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'

function HeroSection() {
  return (
    <div className='hero-section'>
      <Navbar />
      <h1>BRO'</h1>
      <SearchBar />
    </div>
  )
}

export default HeroSection