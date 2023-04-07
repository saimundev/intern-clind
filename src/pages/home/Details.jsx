import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container";
import Loding from "../../components/Loding";
import { motion} from "framer-motion"

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    const feachProdect = async () => {
      try {
        setLoding(true);
        const respnse = await axios.get(
          `https://intern-neii.onrender.com/api/get-singleprodect/${id}`
        );
        setDetails(respnse.data);
        setLoding(false);
      } catch (error) {
        console.log(error);
        setLoding(false);
      }
    };

    feachProdect();
  }, [id]);

  if(loding) return <div className="flex justify-center mt-10"><Loding/></div>
  return (
    <Container>
      <motion.div 
       initial={{ opacity: 0, scale: 0.8 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5 }}
       viewport={true}
      className="grid grid-cols-2 gap-6">
        <img src={details?.image} alt="" className="w-full" />
        <div className="mt-10">
          <h1 className="text-3xl font-semibold">{details?.name}</h1>
          <h3 className="text-2xl mt-2 text-green-500 font-semibold">
            {details?.price}
          </h3>
          <div className="text-lg flex gap-10 mt-2">
            <span className="">Brand :</span>
            <h5 className="text-capitalize">{details?.brand}</h5>
          </div>
          <h2 className="mt-4 font-medium">OVERVIEW</h2>
          <p className="text-md text-justify mt-2">{details?.overview}</p>
          <Link to={`/book/${id}`}>
          <button  className="bg-green-500 px-4 py-2 inline-block text-white font-medium rounded-md mt-4 hover:scale-110 duration-300 hover:bg-green-700">
            Book Now
          </button>
          </Link>
        </div>
      </motion.div>
    </Container>
  );
};

export default Details;
