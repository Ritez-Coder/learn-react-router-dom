import React from 'react'
import { Link } from 'react-router-dom'
import { hooks } from '../hooks'

function Hooks() {
     return (
          <div className='container hooks'>
               <section>
                    <h2 className='text-center'>Important Hooks</h2>
                    <ul style={{display:"flex" ,flexDirection:"column" , alignItems:"center"}}>
                         {
                              hooks.map((val, ind) => {
                                   return <li key={ind.toString()} className="hooklist" >
                                        <Link className='button' to={`/hooks/${ind}`} >
                                             {val.name}
                                        </Link>

                                   </li>
                              })
                         }
                    </ul>

               </section>
          </div>
     )
}

export default Hooks
