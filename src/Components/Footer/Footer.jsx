import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className='Footer'>
        <div className="footWrapper">
            <div className="footLeft">
                <p className='footTitle'>LINKS</p>
                
                <div className="footLinks">
                    <a href="#">HOME</a>
                    <a href="#">ABOUT US</a>
                    <a href="#">SERVICES</a>
                    <a href="#">CONTACT US</a>
                </div>
            </div>
            <div className="footCenter">
                <p className='footTitle'>JOIN US</p>
                
                <div className="footLinks">
                    <p>Let your happiness be known to others</p>
                    <div className='footIcons'>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} className='footIconFb' size='lg'></FontAwesomeIcon></a>
                    <a href=""><FontAwesomeIcon icon={faInstagram}  className='footIconInsta' size='lg'></FontAwesomeIcon></a>
                    <a href=""><FontAwesomeIcon icon={faYoutube}  className='footIconYout' size='lg'></FontAwesomeIcon></a>
                    <a href=""><FontAwesomeIcon icon={faTwitter} className='footIconTwi' size='lg'></FontAwesomeIcon></a>
                    </div>              
                    <p>Thank You!</p>  
                </div>
            </div>
            <div className="footRight">
                <p className='footTitle'>CONTACT US</p>
                
                <div className="footLinks footOther" >
                    <p>Rruga Qemal Stafa</p>
                    <p>Tirane, 1020</p>
                    <p>+355 69-455-6908</p>
                    <a href='#'>freshcleaning@support.com</a>
                </div>
                </div>
        </div>
    </footer>
  )
}

export default Footer