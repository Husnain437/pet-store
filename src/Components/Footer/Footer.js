import React from 'react'
import '../../main.css'
import logo from '../../Assets/logo.945e116ed6f907907053.png'
import fb from '../../Assets/facebook_4494464.png'
import insta from '../../Assets/instagram_733614.png'
import tweet from '../../Assets/twitter_733635.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
        
           <div className='upper'>
           <div  className='footer-logo' >
                    <img className='foot-img' src={logo} alt='logo' />
                </div>
                
                <div className='upper-in'>
                    <div>
                        <p>we are social</p>
                        <div className='footer-icons'>
                            <img className='footer-icon'  src={fb} alt="fb" />
                            <img className='footer-icon' src={insta} alt="insta" />
                            <img className='footer-icon' src={tweet} alt="tweeter" />
                        </div>
                    </div>

                    <div>
                        <p>Our Exprts are available 24/7:</p>
                        <p className='heading'>+1-800-356-8933</p>
                    </div>

                    <div className='up-search'>
                       <p> Subscribe! New Subscribers get 20% off! </p>
                       <input className='inp' type="email" placeholder='     Email' />
                       <button className='btn'>Subscribe</button>
                    </div>

                </div>
           </div>
           <hr />
           <div className='mid'> 
                <div>
                    <p className='heading'>Cateogory</p>
                    <p>Desginer</p>
                    <p>Under $500</p>
                    <p>New Arrivals</p>
                </div>
                <div>
                    <p className='heading'>Customer Service</p>
                    <p>Contact Us</p>
                    <p>Faq</p>
                    <p>Shiping</p>
                </div>
                <div>
                    <p className='heading'>About</p>
                    <p>About us</p>
                    <p>Blog</p>
                    <p>Premium</p>
                </div>
           </div>
           <hr />
           <div className='lower'>
                <p>@ Copyright 2024</p>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Search</p>
           </div>

    </div>
    </div>
  )
}

export default Footer