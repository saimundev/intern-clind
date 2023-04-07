import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { Navigation, Autoplay, Pagination } from "swiper";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import banner from "../assets/home-img-1.png";
import banner1 from "../assets/home-img-2.png";
import Container from "./Container";
import { motion } from "framer-motion"

const Banner = () => {
  return (
    <div className="mt-28">
      <Container>
        <Swiper
          className="relative group"
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={true}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          style={{ zIndex: "-9999999999px", overflow: "hidden" }}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
        >
          <SwiperSlide>
            <div className="grid grid-cols-2">
              <motion.div 
              initial={{ opacity: 0, y:"200px" }}
              whileInView={{ opacity: 1, y:"0px" }}
              transition={{ duration: 0.5 }}
              viewport={true}
              className="">
                <div className="text-[40px] font-black text-[black]">
                  <span className="text-green-500">Make</span> Your Comfort{" "}
                  <br />
                  Is Your <span className="text-green-500">Happyness</span>
                </div>
                <p className="w-[500px] text-md mt-4 text-justify text-black font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  veritatis ab tenetur soluta, commodi officiis, similique omnis
                  corrupti eaque quidem labore dolore aut dignissimos nam sunt
                  ipsum?
                </p>
                <button className="bg-green-500 text-white rounded-md px-4 py-2 block font-semibold mt-4 hover:bg-green-700 duration-300">
                  Shop Now
                </button>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={true}
              
              className="">
                <img src={banner1} alt="" className="w-[70%] z-20" />
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2">
              <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             viewport={true}
            
              className="">
                <div className="text-[40px] font-black text-[black]">
                  <span className="text-green-500">Make</span> Your Comfort{" "}
                  <br />
                  Is Your <span className="text-green-500">Happyness</span>
                </div>
                <p className="w-[500px] text-md mt-4 text-justify text-black font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  veritatis ab tenetur soluta, commodi officiis, similique omnis
                  corrupti eaque quidem labore dolore aut dignissimos nam sunt
                  ipsum?
                </p>
                <button className="bg-green-500 text-white rounded-md px-4 py-2 block font-semibold mt-4 hover:bg-green-700 duration-300">
                  Shop Now
                </button>
              </motion.div>
              <motion.div 
              initial={{ opacity: 0, scale: 0.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={true}
              className="">
                <img src={banner} alt="" className="w-[70%] z-20" />
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2">
              <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               viewport={true}
               className="">
                <div className="text-[40px] font-black text-[black]">
                  <span className="text-green-500">Make</span> Your Comfort{" "}
                  <br />
                  Is Your <span className="text-green-500">Happyness</span>
                </div>
                <p className="w-[500px] text-md mt-4 text-justify text-black font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  veritatis ab tenetur soluta, commodi officiis, similique omnis
                  corrupti eaque quidem labore dolore aut dignissimos nam sunt
                  ipsum?
                </p>
                <button className="bg-green-500 text-white rounded-md px-4 py-2 block font-semibold mt-4 hover:bg-green-700 duration-300">
                  Shop Now
                </button>
              </motion.div>
              <motion.div 
              initial={{ opacity: 0, scale: 0.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={true}
              className="">
                <img src={banner1} alt="" className="w-[70%] z-20" />
              </motion.div>
            </div>
          </SwiperSlide>

          <div className="button-next-slide top-[40%] absolute z-10 w-[40px] h-[40px] bg-black group-hover:left-0 -left-[500px] duration-300 cursor-pointer text-white grid place-items-center">
          <FaArrowRight />
          </div>
          <div className="button-prev-slide top-[40%] absolute z-10  w-[40px] h-[40px] bg-black group-hover:right-0 -right-[500px] duration-300 cursor-pointer text-white grid place-items-center">
          <FaArrowLeft />
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default Banner;
