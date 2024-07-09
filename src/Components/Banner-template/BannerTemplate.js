import React from 'react'
import '../../main.css'
const BannerTemplate = (props) => {
  return (
    <div className='banner-temp'>
      <div className='container'>
        <div className='banner-inner'>
          <div className='banner-text'>  
                    <p className='dogtext1'>{props.text}</p>
                  <p className='dogtext2'>{props.text2}</p>
                  <button className='bnr-btn'><p>Shop Now</p></button>
          </div>
          
          <div className='banner-img'>
            <img className='b-img' src={props.img} alt="Banner-img" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default BannerTemplate