

import "swiper/css";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Card from "../Card/Card";
import image from '../../Assets/demo.6f833909decf3e435d93.png'
import heart from '../../Assets/heart2.png'


import { Navigation } from 'swiper/modules';
import '../../main.css'

export default function App() {
  return (
    <div className="slide2">
    <div className="container ">
    <div className='heading'><h1>Premium Pups</h1></div>
      <Swiper navigation={true} modules={[Navigation]} spaceBetween={50} slidesPerView={4}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20
          },
            430: {
                slidesPerView: 1,
                spaceBetween: 20
              },
            // when window width is <= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is <= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 280
            },
            // when window width is <= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 50
            },
            1080: {
              slidesPerView: 3,
              spaceBetween: 120
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 30
            }


          }} 
      className="mySwiper">
        <SwiperSlide><Card image={image} heart={heart}  /></SwiperSlide>
        <SwiperSlide><Card image={image} heart={heart} /></SwiperSlide>
        <SwiperSlide><Card image={image} heart={heart} /></SwiperSlide>
        <SwiperSlide><Card image={image} heart={heart} /></SwiperSlide>
        <SwiperSlide><Card image={image} heart={heart} /></SwiperSlide>
        <SwiperSlide><Card image={image} heart={heart} /></SwiperSlide>
       
      </Swiper>
    </div>
    </div>
  );
}
