import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-logo'><img className='nav-logo-img' src='https://demo.studiopress.com/monochrome/files/2017/03/logo.png' /></div>
        <div className='nav-links'>
            <div className='nav-ele'>Sample</div>
            <div className='nav-ele'>Features</div>
            <div className='nav-ele'>Layouts</div>
            <div className='nav-ele'>Our Shop</div>
            <div className='nav-ele'>Buy Theme</div>
            <img className='search-icon' style={{paddingRight: "20px"}} 
              src="https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg"
            />
        </div>
    </div>
  )
}

export default Navbar