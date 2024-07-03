// components/SwipeableSection.js
import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper/core';
import TourCard from './TourCard';



const SwipeableSection = ({ cards }) => {
  
    return (
        <div style={{ width: '100%' }}>
     
                <Swiper spaceBetween={20} slidesPerView={4}>
                    
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <TourCard title={card.title} description={card.description} />
                        </SwiperSlide>
                    ))}
                </Swiper>
           
      
        </div>
    );
};

export default SwipeableSection;
