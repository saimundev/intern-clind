import React from 'react'
import Container from '../../components/Container'
import {motion} from "framer-motion"

const Conteck = () => {
  return (
    <div>
      <Container>
        <motion.h1 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={true}
        className="text-center text-3xl font-bold mt-10 mb-8">Conteck Us</motion.h1>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={true}
        className="w-1/2 mx-auto mb-20">
          <form className="border border-gray-300 shadow-sm p-4 rounded">
            <div className="mb-4">
              <input type="text" className="w-full p-2 border outline-none border-gray-300 rounded" placeholder='Enter Your Name...' name="" id="" />
            </div>
            <div className="mb-4">
              <input type="text" className="w-full p-2 border outline-none border-gray-300 rounded" placeholder='Enter Your Email...' name="" id="" />
            </div>
            <div className="mb-4">
              <input type="text" className="w-full p-2 border outline-none border-gray-300 rounded" placeholder='Enter Your Phone Number...' name="" id="" />
            </div>
            <div className="mb-4">
              <textarea className="w-full p-2 border outline-none border-gray-300 rounded" name="" id="" cols="30" rows="4"></textarea>
            </div>
            <div className="mb-4">
              <button className="bg-green-500 text-white font-semibold px-4 py-2 block rounded">Send Message</button>
            </div>
          </form>
        </motion.div>
      </Container>
    </div>
  )
}

export default Conteck