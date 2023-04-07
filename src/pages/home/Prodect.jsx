import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../../components/Container';
import Loding from '../../components/Loding';
import {motion} from "framer-motion"

const Prodect = () => {
    const { category } = useParams();
    const [catProdectData,setCatProdectData] =useState([]);
    const [loding,setLoding] =useState(false)
    useEffect(()=>{
        const feachCatData = async ()=>{
          try {
            setLoding(true)
            const respnse = await axios.get(`https://intern-neii.onrender.com/api/get-catprodect/${category}`)
            setCatProdectData(respnse.data)
            setLoding(false)
          } catch (error) {
            console.log(error)
            setLoding(false)
          }
        }

        feachCatData();
    },[])

    if(loding) return <div className="flex justify-center mt-10"><Loding/></div>
    
  return (
   <Container>
     <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={true}
     className="grid grid-cols-4 gap-6 text-center cursor-pointer mt-10">
        {catProdectData.length > 0 ? catProdectData?.map(item =>(
            <Link to={`/prodect/${item._id}`}>
            <div className="border border-gray-300 rounded-md py-3 hover:scale-105 duration-300">
                <img src={item.image} alt="" />
                <h1 className="text-lg font-medium">{item.name}</h1>
                <h3 className='text-md font-semibold text-green-500'>{item.price}</h3>
            </div>
            </Link>
        )) : "No Data"}
    </motion.div>
   </Container>
  )
}

export default Prodect