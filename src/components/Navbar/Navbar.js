import React from 'react'
import {Link} from "react-router-dom"
import './Navbar.css'

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })

const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
       <Link to="/home" style={{textDecoration: 'none'}}>
        <div className="brand-title">Brand Name</div>
       </Link>
        <a href="/" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="navbar-links">
          <ul>
            <Link to="/home" style={{textDecoration: 'none'}}>
              <li>Home</li>
            </Link>
            <Link to="/about" style={{textDecoration: 'none'}}>
              <li>About</li>
            </Link>
            <Link to="/contact" style={{textDecoration: 'none'}}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar