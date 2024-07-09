import React from 'react'
import '../../main.css'
import add from '../../Assets/add.png'
import { Link } from 'react-router-dom'


const Card = (props) => {
  return (
    <>
    <Link to='/productdetails' style={{ textDecoration: 'none' , color: '#002842'}}>
    <div className='card'>
        <div className='heart'>
            <img className='heart-img' src={props.heart} alt="heart" />
        </div>
        <div className='card-main-img'>
            <img className='card-img' src={props.image} alt="puppy img" />
        </div>
       
        <div className='details' >
            <p className='heading'>Airedale Terrier</p>
            <p className='sub-heading'>King of Terriers, Waterside, Terriers, Bingley Terrier </p>
        </div>
        <div className='price'>
            <p>$988</p>
            <img className='add' src={add} alt="add" />
        </div>
    </div>
    </Link>
    </>
  )
}

export default Card