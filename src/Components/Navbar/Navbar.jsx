import React from 'react'
import './Navbar.css'
import  logo from './logo.ico'

function Navbar() {
  return (
    <div className='Container_navbar'>
        <div className="Burger_logo_navbar">
            <div className="burger">
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div className='logo_div_Navbar'>
                 <img className='logo_size' src={logo} alt="" />
                 <p className='logo_title_Navbar'>YouTube</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar