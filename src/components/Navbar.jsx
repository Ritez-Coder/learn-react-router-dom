import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"

function Navbar() {
     return (
          <div className='navbar'>

               <div className='logo-container'>
                    <h1 className='logo'>Fashiop</h1>
               </div>

               <nav>
                    <ul>
                         <li><Link className='link' to="/"  >Home</Link></li>
                         <li><Link className='link' to={"/shop"} >Shop</Link></li>
                         <li><Link className='link' to={"/auth"} >Register/Login</Link></li>
                    </ul>
               </nav>
          </div>
     )
}

export default Navbar
