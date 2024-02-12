// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './swiper.css';
import { Navigation, Pagination, Scrollbar, Ally } from 'swiper'


export default function Home({ slides }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Ally]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.title} className='imgg' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};