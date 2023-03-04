import React from 'react'
import "./Section4.css"

function Section4Banner({head, body, img}) {
  return (
    <div className='section-4-banner'>
        <img className='section-4-img' src={img} />
        <div className='section-4-banner-head'>
            {head}
        </div>
        <div className='section-4-banner-body'>
            {body}
        </div>
    </div>
  )
}

function Section4() {
  return (
    <div className='section-4'>
      <div className='section-4-head'>
      We create stories.
      </div>
      <div className='section-4-para'>
      A killer narrative will turn your readers into raving fans.
      </div>

      <hr style={{width: "30px", margin: "30px"}}/>
      <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "40px"}}>
          <Section4Banner 
              head="OVERCOMING CREATIVE BLOCK"
              body="Brian Gardner - May 1, 2017"
              img="https://demo.studiopress.com/monochrome/files/2017/04/sample-light-4-1024x576.jpg"
          />
          <Section4Banner 
              head="WHY COMMUNICATION IS KEY"
              body="Brian Gardner - May 1, 2017"
              img="https://demo.studiopress.com/monochrome/files/2017/04/sample-light-3.jpg"
          />
        </div>  
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "50px"}}>      
          <Section4Banner 
              head="THE PATH OF LEAST RESISTANCE"
              body="Brian Gardner - May 1, 2017"
              img="https://demo.studiopress.com/monochrome/files/2017/04/sample-light-2.jpg"
          />
          <Section4Banner 
              head="HOW TO REACH NEW HEIGHTS"
              body="Brian Gardner - May 1, 2017"
              img="https://demo.studiopress.com/monochrome/files/2017/04/sample-light-1-1024x576.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Section4