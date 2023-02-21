import React from 'react'
import './services.css';
const Services = () => {
  return (
    <div className="Services">
        <div className='servicesWrapper'>
            <div className="servicesTitle">
                <h5>OUR SERVICES</h5>
                
                <h1>Perfect Cleaniness without Effort</h1>
            </div>
            <div className="servicesTypes">
                <div className="service">
                    <div className='serviceImg'><img src="/images/home.svg" style={{maxWidth:"90px", height:"90px"}} alt="" /></div>
                    <h3>House Cleaning</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos cumque maiores nemo recusandae magni ipsa iure ea laboriosam aliquid voluptate.</p>
                </div>
                <div className="service">
                <div className='serviceImg'><img src="/images/office.svg" style={{maxWidth:"90px", height:"90px"}} alt="" /></div>
                    <h3>Office Cleaning</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos cumque maiores nemo recusandae magni ipsa iure ea laboriosam aliquid voluptate.</p>
                </div>
                <div className="service">
                <div className='serviceImg'><img src="/images/rental.svg" style={{maxWidth:"90px", height:"90px"}} alt="" /></div>
                    <h3>Airbnb Rentals</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos cumque maiores nemo recusandae magni ipsa iure ea laboriosam aliquid voluptate.</p>
                </div>
                <div className="service">
                <div className='serviceImg'><img src="/images/other.svg" style={{maxWidth:"90px", height:"90px"}} alt="" /></div>
                    <h3>Other Cleaning</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos cumque maiores nemo recusandae magni ipsa iure ea laboriosam aliquid voluptate.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services