import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import axios from "axios";
import Loding from "../../components/Loding";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const Category = () => {
  const [category, setCategory] = useState([]);
  const [loding, setLoding] = useState(false);

  useEffect(() => {
   
    const feachCategoryItem = async () => {
      try {
        setLoding(true);
        const response = await axios.get(
          "https://intern-neii.onrender.com/api/get-category"
        );
        setCategory(response.data);
        setLoding(false);
      } catch (error) {
        console.log(error.message);
        setLoding(false);
      }
    };

    feachCategoryItem();
  }, []);


  return (
    <div className="mt-40">
      <Container>
        <h1 className="text-[30px] uppercase text-black font-bold text-center">
          Top Categories
        </h1>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={true}
        className="grid grid-cols-5 gap-10 mt-[40px]">
          {loding ? <Loding/> : category.length > 0 ? category?.map(item =>(
          <Link to={`/catProdect/${item.name}`} key={item._id}>
              <div className="p-3 duration-300 hover:shadow-sm hover:scale-105 hover:border hover:border-gray-300 cursor-pointer">
              <img src={item.image} alt="" className="w-[50%] h-[100px] mx-auto" />
              <span className="mt-4 font-medium hover:text-green-500 text-gray-500 text-center block">{item.name}</span>
            </div>
          </Link>
          )) : "NO Category"}
        </motion.div>
      </Container>
    </div>
  );
};

export default Category;
