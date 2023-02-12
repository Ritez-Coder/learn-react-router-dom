import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

function SharedLayout() {
  return (
    <div className='container'>
     <div className='header'>
          <Navbar/>
     </div>

     <section>
          <Outlet/>
     </section>
    
    </div>
  )
}

export default SharedLayout
