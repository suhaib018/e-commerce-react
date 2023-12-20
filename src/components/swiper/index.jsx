import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.css"
import ss from "../../../public/assets/react.svg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const SwiperComponent = () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33F6', '#F6FF33']; // Array of colors

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    slidesPerView={1}
    navigation={true}
    pagination={{ clickable: true }}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false
    }}
    style={{ height: "40vh" }}
  >
       <SwiperSlide style={{ backgroundColor: getRandomColor() }}>
        <img src={ss} style={{width:"100%",height:"100%"}}/>
      </SwiperSlide>
      <SwiperSlide style={{ backgroundColor: getRandomColor() }}>Slide 2</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: getRandomColor() }}>Slide 3</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: getRandomColor() }}>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
export default SwiperComponent;