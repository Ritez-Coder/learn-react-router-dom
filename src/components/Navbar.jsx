import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Style.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div>
          <h2>Fashiop</h2>
      </div>

      <nav>
          <ul>
               <li><NavLink className="link">Home</NavLink></li>
               <li><NavLink className="link">Shop</NavLink></li>
               <li><NavLink className="link">Contact</NavLink></li>
               <li><NavLink className="link">Login/Register</NavLink></li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
