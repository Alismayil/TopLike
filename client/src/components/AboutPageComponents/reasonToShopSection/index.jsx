import React, { useEffect, useState } from 'react'
import './reasonToShopSection.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios';


function ReasonToShopSection() {
    const [aboutInform, setAboutInform] = useState('')

    async function AboutInformAxios() {
        const res = await axios.get('http://localhost:4001/aboutinform')
        setAboutInform(res.data)
    }
    useEffect(() => {
        AboutInformAxios()
    }, [])


    return (
        <section id='reasonToShopSection'>
            <h1>Reasons to shop with us</h1>
            <div className="reasonShopLine"></div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {
                    aboutInform && aboutInform.map((item) => (
                        <SwiperSlide>

                            <div className="aboutInformCard">
                                <h1>{item.name}</h1>
                                <p>{item.inform}</p>
                            </div>
                        </SwiperSlide>

                    ))
                }


            </Swiper>
        </section>
    )
}

export default ReasonToShopSection