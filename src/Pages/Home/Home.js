import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import OtherCard from '../../Components/OtherCard/OtherCard'
import Banner2 from '../../Components/Banner2/Banner2'
import Slider from '../../Components/Slider/Slider'
import Slider2 from '../../Components/Slider2/Slider2'
const Home = () => {
  return (
    <div>
        
        <Slider/>
        <Slider2/>
        <Banner2/>
        <OtherCard/>
      
    </div>
  )
}

export default Home