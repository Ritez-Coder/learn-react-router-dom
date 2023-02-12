import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Style.css"

function Header() {
  return (
    <div className='header'>
          <div className='navbar'>
               <div>
                    <h2>Fashiop</h2>
               </div>
               <nav>
                    <ul>
                         <li><NavLink className='link' to="/">Home</NavLink></li>
                         <li><NavLink className='link' to="#shop">Shop</NavLink></li>
                         <li><NavLink className='link' to="/contact">Contact</NavLink></li>
                         <li><NavLink className='link' id='link-btn' to="/auth">Login/Register</NavLink></li>
                    </ul>
               </nav>
          </div>
    </div>
  )
}

export default Header
