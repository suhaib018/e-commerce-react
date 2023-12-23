import Comments from "../../components/comments";
import "./style.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import phone from "../../../public/assets/mobile.png"
import phone1 from "../../../public/assets/mobile1.png"
import phone2 from "../../../public/assets/mobile2.png"
import CartCard from "../../components/cartCard";

const ProductsPage = () => {
  return (
    <>
      <div className="grid-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          navigation={true}
          loop={true}
          >
          <SwiperSlide><img src={phone} /></SwiperSlide>
          <SwiperSlide><img src={phone1} /></SwiperSlide>
          <SwiperSlide><img src={phone2} /></SwiperSlide>
        </Swiper>
        <div className="product-info">
          <p>الالكترونيات </p>

          <p>الوصف </p>
          <p>الماركة : سامسونج</p>
          <div className="color-picker">
            <span style={{ background: "red" }}></span>
            <span
              style={{
                background: "yellow",
                borderRadius: "50%",
                width: "25px",
                height: "25px",
                display: "inline-block"
              }}></span>
            <span
              style={{
                background: "blue",
                borderRadius: "50%",
                width: "25px",
                height: "25px",
                display: "inline-block"
              }}></span>
          </div>

          <section>
            <p>المواصفات</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              cupiditate ipsam eveniet accusantium, iure, odio dolores porro
              voluptates harum veniam, explicabo blanditiis ex itaque repellat!
              Praesentium repellendus veniam tempora accusamus.
            </p>
          </section>

          <section>
            <button className="add-to-cart-button">اضف للعربة</button>
            <div className="price">333 دينار</div>
          </section>
        </div>
      </div>
      <Comments />
    </>
  );
};

export default ProductsPage;
