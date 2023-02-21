import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "./features.css";
import { faAward, faShieldAlt, faWallet } from '@fortawesome/free-solid-svg-icons';
import { faClock, faMessage, faUserCircle } from '@fortawesome/free-regular-svg-icons';
const Features = () => {
  return (
    <div className="Features">
        <div className="featuresWrapper">
            <div className="featuresTitle">
                <h5>WHY PICK US</h5>
            </div>
            <div className="featuresPart">
                <div className="featuresLeft">
                    <div className='feature'>
                        <FontAwesomeIcon className='featureIcon' size='lg' icon={faClock}></FontAwesomeIcon>
                        <h5>Saves You Time</h5>
                    </div>
                    <div className='feature'>
                        <FontAwesomeIcon className='featureIcon' size='lg' icon={faShieldAlt}></FontAwesomeIcon>
                        <h5>Safety First</h5>
                    </div>
                    <div className='feature'>
                        <FontAwesomeIcon className='featureIcon' size='lg' icon={faAward}></FontAwesomeIcon>
                        <h5>Only the Best Quality</h5>
                    </div>
                    <div className='feature'>
                        <FontAwesomeIcon className='featureIcon' size='lg' icon={faUserCircle}></FontAwesomeIcon>
                        <h5>Easy to Get Help</h5>
                    </div>
                    <div className='feature'>
                        <FontAwesomeIcon className='featureIcon' size='lg' icon={faMessage}></FontAwesomeIcon>
                        <h5>Seamless Communication</h5>
                    </div>
                    <div className='feature'>
                        <FontAwesomeIcon className='featureIcon' size='lg' icon={faWallet}></FontAwesomeIcon>
                        <h5>Cash Free Payment</h5>
                    </div>
                </div>
                <div className="featuresRight">
                    <img src="./images/tableoffice.jpg"  alt="An Office Table" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features