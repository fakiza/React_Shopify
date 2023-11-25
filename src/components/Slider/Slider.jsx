import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import './Slider.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useApiData from '../CustumHook/useApiData';
export default function Slider() {
  const {sliders} = useApiData()

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        }}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {sliders && sliders.map((slider, index) => (
          <SwiperSlide key={index}>
            
            <img src={slider.image} alt={slider.description} />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}
