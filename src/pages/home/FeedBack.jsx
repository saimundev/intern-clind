import React from 'react'
import img1 from "../../assets/feed1.png"
import img2 from "../../assets/feed2.jpg"
import img3 from "../../assets/feed3.jpg"
import Container from '../../components/Container'

const FeedBack = () => {
  return (
    <Container>
        <h1 className='text-[30px] uppercase text-black font-bold text-center mt-[120px] mb-10'>Customer's Feedback</h1>
        <div className="grid grid-cols-3 gap-6 text-center">
            <div className="border border-gray-300 shadow-sm px-3 py-6 rounded-md hover:scale-105 duration-300 cursor-pointer">
                <img src={img1} alt="" className="w-[100px] h-[100px] rounded-full mx-auto" />
                <h1 className="text-lg font-medium mt-4 mb-2">Md Hasebur Rahaman</h1>
                <p>The furniture here is modern yet classic. Brilliant Design. Loved i</p>
            </div>
            <div className="border border-gray-300 shadow-sm px-3 py-6 rounded-md hover:scale-105 duration-300 cursor-pointer">
                <img src={img2} alt="" className="w-[100px] h-[100px] rounded-full mx-auto"/>
                <h1  className="text-lg font-medium mt-4 mb-2">Md Saimun Islam</h1>
                <p>I ordered a bed online. Fast delivery & exellent service. Highly recommended</p>

            </div>
            <div className="border border-gray-300 shadow-sm px-3 py-6 rounded-md hover:scale-105 duration-300 cursor-pointer">
                <img src={img3} alt="" className="w-[100px] h-[100px] rounded-full mx-auto" />
                <h1  className="text-lg font-medium mt-4 mb-2">Md akib Khan</h1>
                <p>I ordered a bed online. Fast delivery & exellent service. Highly recommended</p>

            </div>
        </div>
    </Container>
  )
}

export default FeedBack