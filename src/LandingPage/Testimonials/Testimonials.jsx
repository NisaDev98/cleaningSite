import React from 'react'
import './testimonials.css';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';



const Testimonials = () => {
  return (
    <div className='Testimonial'>
        <div className="testiWrapper">
            <div className='testiTitle'>
                <h5>OUR REVIEWS</h5>
            </div>
            <div className='testiPart'>
            <Carousel >
      <Carousel.Item>
      <FontAwesomeIcon className='TestiIcon' size='2x' icon={faQuoteLeft}></FontAwesomeIcon>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In molestiae, cupiditate adipisci dignissimos culpa suscipit iste amet rem debitis ducimus molestias cum quaerat porro blanditiis modi similique hic nesciunt odio! Quam, minima? Eum ipsam neque facere eligendi consequatur eveniet earum. Explicabo illo, quae enim cupiditate iste ex nulla, adipisci id.</p>
      <img className='TestiImg' src="./images/asiangirl.jpg" alt="Man with glasses" />
          <h5>Kim Possible</h5>
          <p className='testiSub'>Dental Tour</p>
      </Carousel.Item>
      <Carousel.Item>
          <FontAwesomeIcon className='TestiIcon' size='2x' icon={faQuoteLeft}></FontAwesomeIcon>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos labore officiis debitis suscipit architecto pariatur nobis, hic dignissimos rem repellendus in nesciunt animi minima, qui quam similique eaque consectetur eligendi iusto quae, quisquam eveniet. Totam repellat asperiores sapiente non alias iste, omnis eligendi, repudiandae labore voluptatum eius! In, est ea.</p>
          <img className='TestiImg' src="./images/blacklady.jpg" alt="Man with glasses" />
          <h5>Kim Possible</h5>
          <p className='testiSub'>Dental Tour</p>
      </Carousel.Item>
      <Carousel.Item>
      <FontAwesomeIcon className='TestiIcon' size='2x' icon={faQuoteLeft}></FontAwesomeIcon>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nesciunt sed deserunt reiciendis modi quos officiis tenetur aliquam sapiente illum?</p>
      <img className='TestiImg' src="./images/man.jpg" alt="Man with glasses" />
          <h5>Kim Possible</h5>
          <p className='testiSub'>Dental Tour</p>
        
      </Carousel.Item>
    </Carousel>        
            </div>
        </div>
    </div>
  )
}

export default Testimonials