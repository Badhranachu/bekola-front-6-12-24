import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li>HOME</li></a>
       </ul>
        
       <ul>
        <a href='/Category'><li>Category</li></a>
        <a href='/Product'><li>Product</li></a>
        {/* <a href='/Pets'><li>Pets</li></a> */}
       </ul>
       View
       <ul>
       <a href="/Categoryview"><li>Category View</li></a>
       {/* <a href="/certificateview"><li>Certificate View</li></a> */}
      
      </ul>

      <ul>
       <a href="/Productview"><li>Product  View</li></a>
       {/* <a href="/certificateview"><li>Certificate View</li></a> */}
      
      </ul>
      
    </div>
  )
}

export default Sidebar












