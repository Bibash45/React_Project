import React from 'react'
import "./Navigation.css"
import Logo from '/public/images/brand_logo.png'

function Navigation() {
  return (
    <nav>
        <div className="logo">
          <img src={Logo} />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className='login-button'>Login</button>
      </nav>
  )
}

export default Navigation