import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div>
          <h2 className='logo'>Fashiop</h2>
      </div>

      <nav>
          <ul>
               <li><NavLink className="link" to={"/"} >Home</NavLink></li>
               <li><NavLink className="link" to={"/shop"} >Shop</NavLink></li>
               <li><NavLink className="link" to={"/contact"} >Contact</NavLink></li>
               <li><NavLink className="link auth-btn" to={"/auth"} >Login/Register</NavLink></li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
