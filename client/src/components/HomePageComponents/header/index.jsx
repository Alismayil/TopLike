import React from 'react'
import './header.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function Header() {
  return (
    <header> 
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <SwiperSlide>
        <div className="slider1Box">
           <div className="sliderBox">
           <h1>Off Road Bicycle</h1>
            <p>Here to bring your life style to the next level.</p>
            <div className='headerBtn'>SHOP NOW</div>
           </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>    
        <div className="slider2Box">
        <div className="sliderBox">
           <h1>Sport Bicycle</h1>
            <p>Accompany you to the end of the road</p>
            <div className='headerBtn'>SHOP NOW</div>
           </div>
        </div>
        </SwiperSlide>
  </Swiper>
  </header>
  )
}

export default Header