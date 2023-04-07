import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { Navigation, Autoplay, Pagination } from "swiper";
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import img5 from "../../assets/5.png"
import img6 from "../../assets/6.png"
import Container from "../../components/Container";


const ShowUp = () => {
  return (
    <div className="mt-28">
      <Container>
        <Swiper
          className="relative group"
          modules={[Autoplay]}
          autoplay={true}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={6}
         
        >
          <SwiperSlide>
                <div className="">
                    <img src={img1} alt="" />
                </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className="">
                    <img src={img2} alt="" />
                </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className="">
                    <img src={img3} alt="" />
                </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className="">
                    <img src={img4} alt="" />
                </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className="">
                    <img src={img5} alt="" />
                </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className="">
                    <img src={img6} alt="" />
                </div>
          </SwiperSlide>

          <SwiperSlide>
                <div className="">
                    <img src={img1} alt="" />
                </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className="">
                    <img src={img2} alt="" />
                </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className="">
                    <img src={img3} alt="" />
                </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className="">
                    <img src={img4} alt="" />
                </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className="">
                    <img src={img5} alt="" />
                </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className="">
                    <img src={img6} alt="" />
                </div>
          </SwiperSlide>
           
         

    
        </Swiper>
      </Container>
    </div>
  );
};

export default ShowUp;
