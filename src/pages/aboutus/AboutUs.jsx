import React from "react";
import aboutImage from "../../assets/about-img.jpg"
import img1 from "../../assets/serv-1.svg"
import img2 from "../../assets/serv-2.svg"
import img3 from "../../assets/serv-3.svg"
import Container from "../../components/Container";
import { motion } from "framer-motion"

const AboutUs = () => {
  return (
    <Container>
      <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={true}
       className="grid grid-cols-2 gap-6 mt-10 ">
        <div className="">
          <img src={aboutImage} alt="" />
        </div>
        <div className="">
          <span className="text-green-500 text-2xl font-bold mt-6 block">welcome to our shop</span>
          <h3 className="text-3xl font-bold">we make your home more astonishing</h3>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            officiis, reiciendis veniam incidunt architecto quam velit dolorum
            exercitationem cum aliquam ab quas dicta dolores ad earum quasis.
          </p>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            adipisci totam, nam voluptates quis delectus. Ea quo repudiandae.
          </p>
          <a href="#" class="bg-green-500 text-white inline-block font-medium mt-4 rounded px-4 py-2 ">
            read more
          </a>
        </div>
      </motion.div>

      <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={true}
       class="">
        <h1 className="text-center text-3xl font-bold mt-32 uppercase mb-10">
         our services
        </h1>

        <div class="grid grid-cols-3 gap-6 mb-32">
          <div class="border border-gray-300 p-4 text-center">
            <img src={img1} alt="" className="mx-auto" />
            <h3 className="text-xl text-green-500 font-bold text-center py-4 capitalize">product selling</h3>
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quod.
            </p>
            <a href="#" class="bg-green-500 text-white px-4 py-2 font-medium rounded inline-block mt-4">
              read more
            </a>
          </div>

          <div class="border border-gray-300 p-4 text-center">
            <img src={img3} alt="" className="mx-auto" />
            <h3 className="text-xl text-green-500 font-bold text-center py-4 capitalize">product Design</h3>
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quod.
            </p>
            <a href="#" class="bg-green-500 text-white px-4 py-2 font-medium rounded inline-block mt-4">
              read more
            </a>
          </div>


          <div class="border border-gray-300 p-4 text-center">
            <img src={img3} alt="" className="mx-auto" />
            <h3 className="text-xl text-green-500 font-bold text-center py-4">24 / 7 support</h3>
            <p className="text-sm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quod.
            </p>
            <a href="#" class="bg-green-500 text-white px-4 py-2 font-medium rounded inline-block mt-4">
              read more
            </a>
          </div>
        </div>
      </motion.section>
    </Container>
  );
};

export default AboutUs;
