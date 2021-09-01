import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination} from 'swiper';
import 'swiper/swiper.scss';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);
export default function Slider() {
  return (
        <Swiper  className="slider"
          spaceBetween={50}
          slidesPerView={1}
          pagination ={{clickable: true}}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="slider_item"><img src="./img/slider/img1.png" alt="img"/></SwiperSlide>
          <SwiperSlide className="slider_item"><img src="./img/slider/img2.png" alt="img"/></SwiperSlide>
          <SwiperSlide className="slider_item"><img src="./img/slider/img4.png" alt="img"/></SwiperSlide>
          <SwiperSlide className="slider_item"><img src="./img/slider/img5.png" alt="img"/></SwiperSlide>
          <SwiperSlide className="slider_item"><img src="./img/slider/img6.png" alt="img"/></SwiperSlide>
          <SwiperSlide className="slider_item"><img src="./img/slider/img7.png" alt="img"/></SwiperSlide>
        </Swiper>
  );
}