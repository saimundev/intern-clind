import React from "react";
import background from "../../assets/background.jpg";
import Container from "../../components/Container";
import { BsFacebook, BsInstagram,BsYoutube} from "react-icons/bs";

const Follow = () => {
  return (
    <div className=" mt-[120px]">
      <div
        className="flex items-center"
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundPosition: "center",
          backgroundSize: "cever",
          backgroundAttachment: "fixed",
          height: "400px",
          width: "100%",
        }}
      >
        <Container>
            <div className="flex justify-between items-center">
                <div className="w-[400px] bg-white text-center py-10 rounded-md">
                    <h1 className="text-blue-500 text-3xl font-semibold">Follow US</h1>
                    <h4 className="font-semibold text-sm mt-2">On Our Social Pages</h4>
                    <div className="flex justify-center gap-4 mt-2">
                       <div className="w-[40px]  h-[40px] border cursor-pointer border-gray-300 rounded-full flex justify-center items-center">
                       <BsFacebook size={32} color="gray"/>
                       </div>
                       <div className="w-[40px] h-[40px] border cursor-pointer border-gray-300 rounded-full flex justify-center items-center">
                       <BsInstagram size={32} color="gray"/>
                       </div>
                       <div className="w-[40px] h-[40px] border cursor-pointer border-gray-300 rounded-full flex justify-center items-center">
                       <BsYoutube size={32} color="gray"/>
                       </div>
                    
                    </div>
                </div>
                <div className="w-[400px] bg-white text-center py-10 px-6 rounded-md">
                    <h1 className="text-blue-500 text-3xl font-semibold">Our Newsletter</h1>
                    <h5 className="text-sm">We’ll never share your email address with a third-party.</h5>
                    <div className="border border-blue-500 flex mt-2">
                        <input type="text" name="" className="w-full p-2 outline-none" placeholder="Enter Your Email..." id="" />
                        <button className="bg-blue-500 text-white font-medium px-2">Subscript</button>
                    </div>
                </div>
            </div>
        </Container>
      </div>
    </div>
  );
};

export default Follow;
