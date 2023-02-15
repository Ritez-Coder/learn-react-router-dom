import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import HookDetail from './pages/HookDetail'
import Hooks from './pages/Hooks'
import SharedLayoit from './pages/SharedLayoit'

function App() {
  return (
    <div className='App'>
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<SharedLayoit/>}>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/hooks' element={<Hooks/>} />
        <Route path='/hooks/:hookID' element={<HookDetail/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
