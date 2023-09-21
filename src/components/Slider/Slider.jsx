import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import black from '../../assets/img/Black.png';
import orange from '../../assets/img/orange.png';
import pink from '../../assets/img/pink.png';
import yellow from '../../assets/img/yellow.png';

import './style.css';

function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const productsArray = [black, orange, pink, yellow];

  return (
    <section className="slider-container">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 mainSlideContainer"
      >
        {productsArray.map((el) => {
          return (
            <SwiperSlide key={el}>
              <img src={el} alt="slippers img" />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper secondarySlideContainer"
      >
        {productsArray.map((el) => {
          return (
            <SwiperSlide key={el}>
              <img src={el} alt="slippers img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export { Slider };
