import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.css"
import ss from "../../../public/assets/react.svg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const SwiperComponent = () => {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    loop={true}
    autoplay={{
      delay: 2500, // Delay in milliseconds before transitioning to the next slide
      disableOnInteraction: false // Continues autoplay after user interaction
    }}
    style={{ height: "20vh" }}
  >
      <SwiperSlide><img src={ss} style={{width:"100%",height:"100%"}}/></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
export default SwiperComponent;