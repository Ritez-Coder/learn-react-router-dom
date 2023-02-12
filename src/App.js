import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import "./App.css"
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import SharedLayout from './components/SharedLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>} ></Route>
          <Route path='shop' element={<Shop/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='auth' element={<Auth/>} />
          <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

export function Error() {
  return <div>
    <h1>404 Not Found</h1>
  </div>
}