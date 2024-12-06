import React from 'react'
import './Topbar.css'
import { useNavigate } from 'react-router-dom'


export const Topbar = () => {
  const navigate =useNavigate()
  return (
    <div className='topbar' >
    <div className="topbarwrapper">
      <div className="topleft">
        <span className="logo">
          BEKOLA
        </span>
       
      </div>
     
      <div className='topright'>
        
        <button onClick={()=> navigate('/')}>Log Out</button>
       
      </div>

    </div>
  </div>
  )
}
