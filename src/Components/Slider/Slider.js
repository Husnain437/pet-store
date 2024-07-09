import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';

import BannerTemplate from '../Banner-template/BannerTemplate';
import img1 from '../../Assets/bannerImage.205e793a240265d6f07c.png'
import img2 from '../../Assets/bannerImage2.8ef9b529bcadcb81ff2b.png'

import '../../main.css'

export default function Slider() {
  return (
    <div className='slid'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <BannerTemplate text='Your Journey to Puppy
        Paradise Begins Here' text2=' Connecting Puppies with Caring Families for Lifelong Happiness
        Helping Puppies Find Forever Homes and Hearts to Fill' img={img1}  />
        </SwiperSlide>
        <SwiperSlide>
            <BannerTemplate text='Embrace the Paw-some
            Journey with Us' text2=' "Empowering Puppies to Spread Joy,
            Creating Bonds That Last a Lifetime, Find Your Perfect Furry
            Companion Today!"' img={img2} />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
