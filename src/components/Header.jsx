import React from 'react'
import { Link } from 'react-router-dom'
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
                         <li><Link className='link' to="/">Home</Link></li>
                         <li><Link className='link' to="/shop">Shop</Link></li>
                         <li><Link className='link' to="/contact">Contact</Link></li>
                         <li><Link className='link' id='link-btn' to="/auth">Login/Register</Link></li>
                    </ul>
               </nav>
          </div>
    </div>
  )
}

export default Header
