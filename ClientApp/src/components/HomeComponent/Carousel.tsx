import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'

import { CarouselData } from '../../assets/database/DataBase';

import 'swiper/swiper-bundle.css'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import '../../styles/Carousel.css'

SwiperCore.use([Navigation, Pagination])

function Carousel() {
    const sliders = []
    for (let i = 0; i < CarouselData.length; i++) {
        sliders.push(
            <SwiperSlide tag='li' key={i}>
                <img src={CarouselData[i].image} />
            </SwiperSlide>
        );
    }

    return <React.Fragment>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ "clickable": true }}
            navigation={true}
            className="mySwiper"
        >
            {sliders}

        </Swiper>
    </React.Fragment>
}

export default Carousel
