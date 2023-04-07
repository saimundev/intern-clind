import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Container from "../../components/Container";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import Loding from "../../components/Loding";
import { motion } from "framer-motion";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    phone: yup.string().required(),
    address: yup.string().required(),
    postCode: yup.string().required(),
    rodeNumber: yup.string().required(),
  })
  .required();

const Booking = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loding, setLoding] = useState(false);
  const [sendLoding, setSendLoding] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const booking = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      postCode: data.postCode,
      rodeNumber: data.rodeNumber,
      prodectId: id,
    };

    try {
      setSendLoding(true);
      const response = await axios.post(
        "https://intern-neii.onrender.com/api/create-booking",
        booking
      );
      if (response.data) {
        toast.success("Booking Successfull", { position: "top-left",theme:"colored" });
        setSendLoding(false);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setSendLoding(false);
    }
  };

  if(loding) return <div className="flex justify-center mt-20"> <Loding/> </div>

  return (
    <Container>
      {id ? (
        <motion.div 
        initial={{ opacity: 0, y:"100px" }}
        whileInView={{ opacity: 1, y:"0px"}}
        transition={{ duration: 0.5 }}
        viewport={true}
        className="grid grid-cols-[1fr_2fr] gap-6">
          <div className="">
            <h1 className="text-3xl font-semibold mt-4">Your Prodect</h1>
            <img src={details?.image} alt="" className="w-full" />
            <div className="mt-2">
              <h1 className="text-3xl font-semibold">{details?.name}</h1>
              <h3 className="text-2xl mt-1 text-green-500 font-semibold">
                {details?.price}
              </h3>
              <div className="text-lg flex gap-10 mt-1">
                <span className="">Brand :</span>
                <h5 className="text-capitalize">{details?.brand}</h5>
              </div>
              <h2 className="mt-4 font-medium">OVERVIEW</h2>
              <p className="text-md text-justify mt-2 mb-32">
                {details?.overview}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Enter Your Name"
                  className="w-full outline-none p-2 border border-gray-300 rounded"
                  name="name"
                  id=""
                />
                <p className="text-red-500 ">{errors.name?.message}</p>
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  {...register("email")}
                  placeholder="Enter Your Email"
                  className="w-full outline-none p-2 border border-gray-300 rounded"
                  name="email"
                  id=""
                />
                <p className="text-red-500 ">{errors.email?.message}</p>
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  {...register("phone")}
                  placeholder="Enter Your Phone Number"
                  className="w-full outline-none p-2 border border-gray-300 rounded"
                  name="phone"
                  id=""
                />
                <p className="text-red-500 ">{errors.phone?.message}</p>
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  {...register("address")}
                  placeholder="Enter Your Address"
                  className="w-full outline-none  p-2 border border-gray-300 rounded"
                  name="address"
                  id=""
                />
                <p className="text-red-500 ">{errors.address?.message}</p>
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  {...register("postCode")}
                  placeholder="Enter Your Post code"
                  className="w-full outline-none p-2 border border-gray-300 rounded"
                  name="postCode"
                  id=""
                />
                <p className="text-red-500 ">{errors.postCode?.message}</p>
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  {...register("rodeNumber")}
                  placeholder="Enter Your Rode Number"
                  className="w-full outline-none p-2 border border-gray-300 rounded"
                  name="rodeNumber"
                  id=""
                />
                <p className="text-red-500 ">{errors.rodeNumber?.message}</p>
              </div>
              <div className="mb-5">
                <button
                  type="submit"
                  className="bg-green-500 text-white font-semibold px-8 py-2 inline-block rounded"
                >
                  {sendLoding ? "Pending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      ) : (
        <div className="h-screen flex-col flex justify-center items-center">
          <div className="text-3xl font-bold uppercase">
            Your booking is empty. plese booking a prodect
          </div>
          <Link to="/catProdect/Center%20Table" className="bg-green-500 px-8 py-2 rounded font-semibold text-white block mt-4">
            Go Booking Prodect
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Booking;
