import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const HomeProdect = ({ catName }) => {
  const [prodect, setProdect] = useState([]);
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    const feachCategoryItem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5050/api//home-prodect/${catName}`
        );
        setProdect(response.data);
        setLoding(false);
      } catch (error) {
        console.log(error.message);
        setLoding(false);
      }
    };

    feachCategoryItem();
  }, []);
 
  return (
    <Container className="">
        
         <div className="text-xl font-semibold uppercase mt-12 mb-2 text-gray-500">
         {catName}
         </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={true}
      className="grid grid-cols-4 gap-6 text-center cursor-pointer">
        {prodect.length > 0
          ? prodect?.map((item) => (
              <Link to={`/prodect/${item._id}`}>
                <div className="border border-gray-300 rounded-md py-3 hover:scale-105 duration-300">
                  <img src={item.image} alt="" />
                  <h1 className="text-lg font-medium">{item.name}</h1>
                  <h3 className="text-md font-semibold text-green-500">
                    {item.price}
                  </h3>
                </div>
              </Link>
            ))
          : "No Data"}
      </motion.div>
    </Container>
  );
};

export default HomeProdect;
