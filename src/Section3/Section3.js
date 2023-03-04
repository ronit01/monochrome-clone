import React from 'react'
import "./Section3.css"

function Section3() {
  return (
    <div className='section-3'>
        <div className='section-3-head'>
            We design brands.
        </div>
        <div className='section-3-para'>
        A simple look is all you need to crush your competition.
        </div>

        <hr style={{width: "30px", margin: "30px"}}/>

        <div className='section-3-brands'>
            <img className='section3-imgs' src="https://demo.studiopress.com/monochrome/files/2017/04/les-avenirs.png"/>
            <img className='section3-imgs' src="https://demo.studiopress.com/monochrome/files/2017/04/avec-simple.png"/>
            <img className='section3-imgs' src="https://demo.studiopress.com/monochrome/files/2017/04/whitespace.png"/>
            <img className='section3-imgs' src="https://demo.studiopress.com/monochrome/files/2017/04/minimalism.png"/>
            <img className='section3-imgs' src="https://demo.studiopress.com/monochrome/files/2017/04/barcelona-33.png"/>
            <img className='section3-imgs' src="https://demo.studiopress.com/monochrome/files/2017/04/smooth-vanilla.png"/>
        </div>
    </div>
  )
}

export default Section3