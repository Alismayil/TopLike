import React, { useEffect, useState } from 'react'
import './informSection.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios'

function InformSection() {
    const [inform, setInform] = useState('')

    async function InformAxios() {
        const res=await axios.get("http://localhost:4001/inform")
        setInform(res.data)
    }
    useEffect(() => {
        InformAxios()
    }, [])
    
  return (
    <section id='informSection'>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {
        inform && inform.map((item)=>(
        <SwiperSlide>
            <div className="informBox">
            <img src={item.imageinform} alt="" srcset="" />
            <p>{item.biginform}</p>
            <span>{item.otherinform}</span>
            </div>

        </SwiperSlide>
        ))
    }
    
      </Swiper>
    </section>
  )
}

export default InformSection