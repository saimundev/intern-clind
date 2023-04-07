import React from "react";
import Container from "../../components/Container";
import img1 from "../../assets/trandy1.jpg";
import img2 from "../../assets/trandy2.gif";
import img3 from "../../assets/trandy3.jpg";
import img4 from "../../assets/trandy4.gif";
import { motion } from "framer-motion";

const Trandy = () => {
  return (
    <div>
      <Container>
        <motion.h1 
         initial={{ opacity: 0, x:"-200px"}}
         whileInView={{ opacity: 1,x:"0px"}}
         transition={{ duration: 0.5 ,}}
         viewport={true}
        className="text-[30px] uppercase text-black font-bold text-center mt-[120px] mb-6">
          Trending Products
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={true}
          className="grid grid-cols-4 gap-6"
        >
          <div className="border border-gray-300 flex justify-center rounded-md cursor-pointer hover:-translate-y-2 duration-300">
            <img src={img1} alt="" />
          </div>
          <div className="border border-gray-300 flex justify-center rounded-md cursor-pointer hover:-translate-y-2 duration-300">
            <img src={img2} alt="" />
          </div>
          <div className="border border-gray-300 flex justify-center rounded-md cursor-pointer hover:-translate-y-2 duration-300">
            <img src={img3} alt="" />
          </div>
          <div className="border border-gray-300 flex justify-center rounded-md cursor-pointer hover-translate-y-2 duration-300">
            <img src={img4} alt="" />
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Trandy;
