import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Header = () => {
  return (
    <nav className="w-full bg-white z-50 ">
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">LAMA</div>
          <ul>
            <li className="flex gap-8">
              <Link to="/" className="capitalize font-medium py-5   hover:text-green-500 duration-300">Home</Link>
              <Link to="/book" className="capitalize font-medium py-5 hover:text-green-500 duration-300">Booking</Link>
              <Link to="/about" className="capitalize font-medium py-5 hover:text-green-500 duration-300">About</Link>
              <Link to="/conteck" className="capitalize font-medium py-5 hover:text-green-500 duration-300">Conteck</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
