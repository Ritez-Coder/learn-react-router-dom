import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router'
export const Context = createContext(null);

function SharedLayoit() {
     const location = useLocation();
     const [isOpen, setIsOpen] = useState(false);
     return (
          <div className='shared-layout'>
               <Context.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>

                    <p className='url-path'>Current-path : {location.pathname}</p>
                    <Navbar />
                    <div>
                         <Outlet />
                    </div>
               </Context.Provider>
          </div>
     )
}

export default SharedLayoit
