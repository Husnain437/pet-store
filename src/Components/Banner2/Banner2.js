import React from 'react'
import dog from '../../Assets/bannerinner.d36b85d9cade5abab8d5.png'
import stl from '../../Assets/download.png'
import arrow from '../../Assets/arrow.png'
import '../../main.css'
const Banner2 = () => {
  return (
    <div className='banner2-main'>
      <div className='container' >
        <div className='animat'>
          <div className='banner2-img'>
              <img className='banner2-dog' src={dog} alt="" />
          </div>
          <div className='banner2'>
              <div className='b1'>
                
                <h1 className='b1-txt'><img className='stl' src={stl} alt="style icon" /> Your </h1>
                <h1 className='b1-txt'>  Ad Premium
                </h1>
              </div>
              <div className='b2'>
                <h1 className='b2-txt'>Elevate Your Puppy's Visibility
                    and Find Loving Homes Faste</h1>
                    <button className='bnr-btn'><p>Make it</p></button>
                    
              </div>   
          </div>
          <div className='arrow-img'>
          <img className='arrow' src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2