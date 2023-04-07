import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeProdect from "../../components/HomeProdect";
import Loding from "../../components/Loding";

const ProdectList = () => {
    const [category, setCategory] = useState([]);
    const [loding, setLoding] = useState(false);
  
    useEffect(() => {
      setLoding(true);
      const feachCategoryItem = async () => {
        try {
          const response = await axios.get(
            "https://intern-neii.onrender.com/api/random-category"
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
    <div>
         <h1 className="text-[30px] uppercase text-black font-bold text-center mt-[120px]">
          Prodect List
        </h1>
     {loding ? <div className="flex justify-center mt-10"><Loding/></div> : category.length > 0 && category?.map(item =>(
        <HomeProdect catName={item.name}/>
     ))}
    </div>
  );
};

export default ProdectList;
