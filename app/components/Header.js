import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
      <div className= "main-container">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">Paw2Nose</Link>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/userProfile">Profile</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
          </nav>
        </div>
)

export default Header