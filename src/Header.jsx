import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {

  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(false); // Set visibility to false when "X" is clicked
  };
  if (!isVisible) {
    return null; // If not visible, return null to hide the component
  }
  return (
    <>
     
      <div className="h-[80px] bg-[#333] w-full flex justify-between px-4 md:px-8">
        <div className="flex space-x-3">
          <Link to="/" className="flex items-center">
            <img
              src="https://preview.colorlib.com/assets/img/logo.png"
              className="w-auto h-[30px] mt-4"
              alt="logo"
            />
          </Link>
          <div className="hidden md:flex items-center bg-black text-[#9B9B9B] text-xl px-3">
            + AVO
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {/* Icons for larger screens */}
          <div className="hidden md:flex space-x-6 ">
            <Link to="/" className="text-white text-3xl hover:text-gray-400 ">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </Link>
            <Link to="/" className="text-white text-3xl hover:text-gray-400">
              <i className="fa-solid fa-tablet-screen-button"></i>
            </Link>
            <Link to="/" className="text-white text-3xl hover:text-gray-400">
              <i className="fa-solid fa-laptop"></i>
            </Link>
          </div>
          <Link to="/" className="text-white text-3xl bg-green-600 p-3 rounded-lg hover:bg-green-700">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <button onClick={handleClose} className="text-white text-3xl hover:text-gray-400">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

     
     
    </>
  );
};

export default Header;
