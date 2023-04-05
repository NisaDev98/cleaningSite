import { useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './navbar.css';
const Navbar = () => {
const [navIcon, setNavIcon]=useState(true)
function navToggle(){
    setNavIcon(prevState => !prevState)
}

  return (
    <nav className="Navbar">
        <div className="navWrapper">
            <div className="navLeft">
                <div className="navImgWrapper">
                    <img className='logoImg' src="/images/logo192.png" alt="Logo"  />
                </div>
            </div>
            <div className='nav-btn' onClick={navToggle}>
                <FontAwesomeIcon icon={navIcon ? faBars : faXmark} ></FontAwesomeIcon>
            </div>
            <div className="navRight" >
                <a href='#' className='navMenu'>Home</a>
                <a href='#' className='navMenu'>About</a>
                <a href='#' className='navMenu'>Services</a>
                <a href='#' className='navMenu'>FAQ</a>
                <a href='#' className='navMenu'>Contact Us</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar