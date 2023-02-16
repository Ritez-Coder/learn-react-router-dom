import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../pages/SharedLayout'

function Navbar() {

  const {isOpen , setIsOpen} = useContext(Context)
  
  const handleHamClick =() => {
    setIsOpen(state => {
      return state ? false:true;
    })
  }
  return (
    <div className='navbar-container'>

    <div className='navbar'>
     <div>
          <h1 className='logo neonText'>React-Router</h1>
     </div>

      
      <div onClick={handleHamClick} className='hamburger'>
        <div className='line' ></div>
        <div className='line' ></div>
        <div className='line' ></div>
      </div>

     <ul className='navlinks'>
          <li><NavLink className='link' to={"/"}>Home</NavLink></li>
          <li><NavLink className='link' to={"/about"}>About</NavLink></li>
          <li><NavLink className='link' to={"/contact"}>Developer</NavLink></li>
          <li><NavLink className='link' to={"/hooks"}>Hooks</NavLink></li>
     </ul>
     
    </div>

  { isOpen ? <div className='toggle-nav'>
    <ul className='toggle-navlinks'>
          <li><NavLink onClick={()=>setIsOpen(false)} className='link' to={"/"}>Home</NavLink></li>
          <li><NavLink onClick={()=>setIsOpen(false)} className='link' to={"/about"}>About</NavLink></li>
          <li><NavLink onClick={()=>setIsOpen(false)} className='link' to={"/contact"}>Developer</NavLink></li>
          <li><NavLink onClick={()=>setIsOpen(false)} className='link' to={"/hooks"}>Hooks</NavLink></li>
     </ul>
    </div> : "" }

    </div>
  )
}

export default Navbar
