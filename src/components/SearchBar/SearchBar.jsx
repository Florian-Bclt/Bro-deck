import React from 'react'
import './SearchBar.css'
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="app__searchbar">
      <div className="app__searchbar-text">
        <h2>Les cartes n'ont plus de secret</h2>
      </div>
      <div className="app__searchbar-input">
        <CiSearch className='search-icon'/>
        <input type="text" placeholder='Rechercher une carte' />
        <button className='search-btn'>Go !</button>
      </div>
    </div>
  )
}

export default SearchBar