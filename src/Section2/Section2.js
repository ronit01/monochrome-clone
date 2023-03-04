import React from 'react'
import "./Section2.css"

function Section2() {
  return (
    <div className='section-2'>
        <div className='section-2-head'>
            We build experience.
        </div>
        <div className='section-2-para'>
        A minimalist approach is the only way to design a website.
        </div>

        <hr style={{width: "30px", margin: "30px"}}/>
        
        <div className='section-2-banner-cont'>
            <div className='section-2-banner'>
                <div className="section-2-banner-head">
                    DESIGN
                </div>
                <div className='section-2-banner-para'>
                    With an emphasis on typography, white space, and mobile-optimized design, your website will look absolutely breathtaking.
                </div>
                <button className="learn-bt">LEARN MORE</button>
            </div>
            <div className='section-2-banner'>
                <div className="section-2-banner-head">
                    CONTENT
                </div>
                <div className='section-2-banner-para'>
                    Our team will teach you the art of writing audience-focused content that will help you achieve the success you truly deserve.
                </div>
                <button className="learn-bt">LEARN MORE</button>
            </div>
            <div className='section-2-banner'>
                <div className="section-2-banner-head">
                    STRATEGY
                </div>
                <div className='section-2-banner-para'>
                    We help creative entrepreneurs build their digital business by focusing on three key elements of a successful online platform.
                </div>
                <button className="learn-bt">LEARN MORE</button>
            </div>
        </div>
    </div>
  )
}

export default Section2