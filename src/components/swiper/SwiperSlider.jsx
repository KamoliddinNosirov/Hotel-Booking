



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./SwiperSlider.scss"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaRegStar, FaStar } from 'react-icons/fa';

export default function SwiperSlider() {
  return (
    <>
      <Swiper
         spaceBetween={20}
         slidesPerView={3}
         centeredSlides={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         loop={true}
         modules={[Autoplay, Pagination, Navigation]}
         breakpoints={{
           0: {
             slidesPerView: 1,
             spaceBetween: 10,
           },
           750: {
             slidesPerView: 1,
             spaceBetween: 10,
           },
           1000: {
             slidesPerView: 3,
             spaceBetween: 10,
           },
           1500: {
             slidesPerView: 3,
             spaceBetween: 10,
           },
         }}
        className="mySwiper"
      >
        <SwiperSlide className='swiper_div'>
          <div className="img_container">
            <img src="/public/imgs/userimg.jpg" alt="" />
            <div className="user_info">
              <h3>Emma Rodriguez</h3>
              <p>Barcelona, Spain</p>
            </div>
          </div>
          <div className="stars">
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
          </div>
          <p>"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay  provides."</p>
        </SwiperSlide>
        <SwiperSlide className='swiper_div'>
          <div className="img_container">
            <img src="/public/imgs/userimg01.jpeg" alt="" />
            <div className="user_info">
              <h3>Emma Rodriguez</h3>
              <p>Barcelona, Spain</p>
            </div>
          </div>
          <div className="stars">
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaRegStar className='star' />
          </div>
          <p>"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay  provides."</p>
        </SwiperSlide>
        <SwiperSlide className='swiper_div'>
          <div className="img_container">
            <img src="/public/imgs/userimg02.jpeg" alt="" />
            <div className="user_info">
              <h3>Liam Johnson</h3>
              <p>Barcelona, Spain</p>
            </div>
          </div>
          <div className="stars">
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaRegStar className='star' />
          </div>
          <p>"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay  provides."</p>
        </SwiperSlide>
        <SwiperSlide className='swiper_div'>
          <div className="img_container">
            <img src="/public/imgs/userimg03.jpeg" alt="" />
            <div className="user_info">
              <h3>Sophia Lee</h3>
              <p>Barcelona, Spain</p>
            </div>
          </div>
          <div className="stars">
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaRegStar className='star' />
          </div>
          <p>"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay  provides."</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}








