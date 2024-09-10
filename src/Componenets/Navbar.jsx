


import React from 'react'
import {Link} from 'react-router-dom'

 function Navbar() {
  return (
    <>
    

    <div className="navbar bg-base-300 flex justify-between">
  <button className="btn btn-ghost text-xl">Zara collection</button>
  <div style={{
        display:'flex',
justifyContent:'center',
gap:'20px',
margin:'20px'
    }}  >

<Link to="">Home</Link>
<Link to="about">About</Link>
<Link to="contact">Contact</Link>
<Link to="services">Services</Link>


    </div>


</div>

</>


  )
}
export default Navbar
