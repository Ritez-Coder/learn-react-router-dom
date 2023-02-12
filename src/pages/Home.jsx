import React from 'react'
import { Outlet } from 'react-router'

function Home() {
  return (
    <div>
      This is home

      <Outlet/>
      <h1>This is home page</h1>
    </div>
  )
}

export default Home
