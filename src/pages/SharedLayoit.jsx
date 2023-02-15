import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import { hooks } from '../hooks'
function SharedLayoit() {
     console.log(hooks)
  return (
    <div className='shared-layout'>
     <Navbar/>
     <div>
          <Outlet/>
     </div>
    </div>
  )
}

export default SharedLayoit
