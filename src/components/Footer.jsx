import React from "react";
import Conteck from "../pages/conteck/Conteck";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-gray-300 py-24">
      <Container>
        <div className="grid grid-cols-4 gap-6 ">
          <div className="">
            <h3 className="text-xl font-semibold border-b border-gray-400 pb-2 mb-4">INFORMATION</h3>
            <div>About Us</div>
            <div>FAQ</div>
            <div>Warranty And Services</div>
            <div>Support 24/7 page</div>
            <div>Product Support</div>
            <div>Trade License</div>
          </div>

          <div className="">
            <h3 className="text-xl font-semibold border-b border-gray-400 pb-2 mb-4">SERVICES</h3>
            <div>Returns</div>
            <div>Support</div>
            <div>Site Map</div>
            <div>Leave a Complain</div>
            <div>Appointment Booking</div>
          </div>

          <div className="">
            <h3 className="text-xl font-semibold border-b border-gray-400 pb-2 mb-4">EXPLORE</h3>
            <div>IPDC EZ</div>
            <div>EMI</div>
            <div>Catalog</div>
          </div>

          <div className="">
            <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">ADDRESS</h3>
            <div>62 East Hazipara, DIT Road, Malibagh, Dhaka -1219.</div>
            <div>Phone : +8809617444777</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
