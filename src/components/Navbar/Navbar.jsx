import React, { useState } from 'react'
import './Navbar.css'
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from "react-icons/im";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2>Bro<span>'</span>Deck</h2>
      </div>
      <ul className="app__navbar-links">
        <li>Deck</li>
        <li>Accueil</li>
        <li>Contact</li>
      </ul>
      <div className="app__navbar-profil">
        <FaUser className='icon'/>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='var(--background-color)' fontSize={25} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <ImCross fontSize={25} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li>Accueil</li>
              <li>Deck</li>
              <li>Contact</li>
            </ul>
          </div>

        )}
      </div>
    </nav>
  )
}

export default Navbar