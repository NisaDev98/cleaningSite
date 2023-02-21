import React from 'react'
import './hero.css'


const Hero = () => {
  return (
    <div className='Hero'>
      <div className='heroWrapper'>
        <div className='heroText'> 
          <h1>Profesional House Cleaning</h1>
          <h2>We do everything</h2>
          <h3>Houses, Offices, Buildings and More</h3>
        </div>
        {/* <Button variant="contained" color='success' className='heroButton'>Book A Cleaning</Button> */}
        <button type='submit'>Book a Cleaning Now</button>
      </div>
    </div>
  )
}

export default Hero