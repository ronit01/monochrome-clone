import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-1'>
            Hit the ground running with a minimalist look. 
            <button className='footer-1-bt'>LEARN MORE</button>
        </div>
        <div className='footer-2'>
            <img className='footer-2-logo' src="https://demo.studiopress.com/monochrome/wp-content/themes/monochrome-pro/images/logo-white.png"/>
            <div className='footer-21'>
            Handcrafted with ❤ in Chicago · Powered by StudioPress
            </div>
            <div className='footer-22'>
                FACEBOOK <hr style={{width: "10px", margin: "2px"}}/> TWITTER <hr style={{width: "10px", margin: "2px"}}/> INSTAGRAM
            </div>
        </div>
    </div>
  )
}

export default Footer