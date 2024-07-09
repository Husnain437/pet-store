import React from 'react'
import { useState } from 'react';
import logo from '../../Assets/logo.945e116ed6f907907053.png'
import search from '../../Assets/loupe.png'
import user from '../../Assets/user.png'
import heart from '../../Assets/heart.png'
import menu from '../../Assets/hamburger.png'
import { Link } from 'react-router-dom';
import '../../main.css'
const Navbar = () => {

 const [isOpen, setIsOpen] = useState(false)
 const [searchOpen, setSearchOpen] = useState(false)
 const [isHovered, setIsHovered] = useState(false);


 const handleMouseEnter = () => {
   setIsHovered(true);
 };

 const handleMouseLeave = () => {
   setIsHovered(false);
 }

  return (
    <>
    <div className='main'>
          <div className='main-logo'>
            <a href="/">
              <img src={logo} alt='logo' className='logo' />
              </a>
          </div>
            <div className='menu' onClick={()=>{
              setIsOpen(!isOpen)
            }
            }>
            <img src={menu} alt='menu' className='menu-logo'  />

            </div>
          <div className='iner'>
            <ul className={isOpen ? 'open' : ''}>
              <li className='nav-item'>
                <Link style={{ textDecoration: 'none' , color: '#002842'}}   className='nav-link dropdown'>
                    Categories
                    <div className='drop'>
                      <Link style={{ textDecoration: 'none' , color: '#002842'}} className='dropitem'>Designer</Link>
                      <Link style={{ textDecoration: 'none' , color: '#002842'}} className='dropitem'>Under $500</Link>
                      <Link style={{ textDecoration: 'none' , color: '#002842'}} className='dropitem'>New Arrivals</Link>
                      <Link style={{ textDecoration: 'none' , color: '#002842'}} className='dropitem'>Apartment Friendly</Link>
                      <Link style={{ textDecoration: 'none' , color: '#002842'}} className='dropitem'>Hypoallergenic</Link>
                      <Link style={{ textDecoration: 'none' , color: '#002842'}} className='dropitem'>Puppies on Sale </Link>
                      <Link style={{ textDecoration: 'none' , color: '#002842'}} className='dropitem'>Puppies Available Today</Link>
                    </div>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'>Puppies</Link>
              </li>
              <li className='nav-item'>
                <Link  className='nav-link'>Stud Dogs</Link>
              </li>
              <li className='nav-item'>
                <Link  className='nav-link'>Advertise</Link>
              </li>
              <li className='nav-item'>
                <Link  className='nav-link'>About</Link>
              </li>
              <li className='nav-item'>
                <Link  className='nav-link'>Blogs</Link>
              </li>
              <li className='nav-item'>
                <Link  className='nav-link'>Contact US</Link>
              </li>
            </ul>
           
          </div>
          <div className='right-icons'>
                <ul className={isOpen ? 'open2' : ''}>
              <li className='nav-item'>
                    <Link   className='nav-link' onClick={()=>{setSearchOpen(!searchOpen)}} ><img className='nav-i' src={search} alt="non" /></Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' href=""><img className='nav-i' src={heart} alt="non" /></Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/auth'><img className='nav-i' src={user} alt="non" /></Link>
                </li >
                </ul>
              </div>
        </div>
       
        <div className={searchOpen ? 'open3' : 'closed'}>
        <hr />
          <div className='search-bar'>
              
              <input className='input-search'  placeholder='      Search for Products' />
              <div className='search-bar-icon'>
              <img className='nav-i' src={search} alt='search icon' />
              </div>
              
          </div>
        </div>
    </>
       
  )
}

export default Navbar;