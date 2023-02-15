import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
     <div>
          <h1 className='logo neonText'>React-Router</h1>
     </div>

     <ul>
          <li><NavLink className='link' to={"/"}>Home</NavLink></li>
          <li><NavLink className='link' to={"/about"}>About</NavLink></li>
          <li><NavLink className='link' to={"/contact"}>Contact</NavLink></li>
          <li><NavLink className='link' to={"/hooks"}>Router Hooks</NavLink></li>
     </ul>
    </div>
  )
}

export default Navbar
