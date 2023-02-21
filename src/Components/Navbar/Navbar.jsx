import { useRef } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './navbar.css';
const Navbar = () => {

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};


  return (
    <nav className="Navbar">
        <div className="navWrapper">
            <div className="navLeft">
                <div className="navImgWrapper">
                    <img className='logoImg' src="/images/logo192.png" alt="Logo"  />
                </div>
            </div>
            <div className="navRight" ref={navRef}>
                <a href='#' className='navMenu'>Home</a>
                <a href='#' className='navMenu'>About</a>
                <a href='#' className='navMenu'>Services</a>
                <a href='#' className='navMenu'>FAQ</a>
                <a href='#' className='navMenu'>Contact Us</a>
                <button>
                    <FontAwesomeIcon className="nav-btn nav-close-btn"
					onClick={showNavbar} icon={faXmark}></FontAwesomeIcon>
                </button>
            </div>
            <button>
                <FontAwesomeIcon className="nav-btn" onClick={showNavbar} icon={faBars}></FontAwesomeIcon>
            </button>
        </div>
    </nav>
  )
}

export default Navbar