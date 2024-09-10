import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black w-full mx-auto py-20 px-10">
        <div className="flex flex-col md:flex-row justify-around space-y-20">
          <div className="md:w-[15%]">
            <h1 className="text-white text-xl mb-6 md:mb-14 font-bold">avo</h1>
            <p className="text-[#FFFFFFB3] text-xl">
              Far far away, behind the word mountains, far from the countries.
            </p> 
            <div className="mt-10 space-x-3">
            <span className="text-center cursor-pointer py-1 px-1 rounded-full w-11 bg-slate-600"><i className="fa-brands w-9  text-[#FFFFFFB3] fa-twitter"></i></span>
            
            <span className="text-center cursor-pointer py-1 px-1 rounded-full w-11 bg-slate-600"><i className="fa-brands w-9 text-[#FFFFFFB3] fa-facebook"></i></span>
            <span className="text-center cursor-pointer py-1 px-1 rounded-full w-11 bg-slate-600"><i className="fa-brands w-9 text-[#FFFFFFB3] fa-instagram"></i></span>
            </div>
            
          </div>
          <div>
            <h1 className="text-white text-xl mb-6 md:mb-14 font-bold">About Us</h1>
            <div className="text-[#FFFFFFB3] text-xl">
              <ul className="space-y-3">
                <li className="cursor-pointer">
                  <i className="fa-solid fa-chevron-right"></i> Our story
                </li>
                <li className="cursor-pointer">
                  <i className="fa-solid fa-chevron-right"></i> Meet the Team
                </li>
                <li className="cursor-pointer">
                  <i className="fa-solid fa-chevron-right"></i> Careers
                </li>
                
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-white text-xl mb-6 md:mb-14 font-bold">Community</h1>
            <div className="text-[#FFFFFFB3] text-xl">
              <ul className="space-y-3">
                <li className="cursor-pointer">
                  <i className="fa-solid fa-chevron-right"></i> Projects
                </li>
                <li className="cursor-pointer">
                  <i className="fa-solid fa-chevron-right"></i> Team
                </li>
                <li className="cursor-pointer">
                  <i className="fa-solid fa-chevron-right"></i> Reviews
                </li>
                <li className="cursor-pointer">
                  <i className="fa-solid fa-chevron-right"></i> FAQ
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-white text-xl mb-6 md:mb-14 font-bold">Company</h1>
            <div className="text-[#FFFFFFB3] text-xl">
              <ul className="space-y-3">
                <li className="cursor-pointer">
                  <i className="fa-solid fa-chevron-right"></i> Careers
                </li>
                <li className="cursor-pointer">
                  <i className="fa-solid fa-chevron-right"></i> About us
                </li>
                <li className="cursor-pointer">
                  <i className="fa-solid fa-chevron-right"></i> Contact
                </li>
                <li className="cursor-pointer">
                  <i className="fa-solid fa-chevron-right"></i> Press
                </li>
              </ul>
            </div>
          </div>
          <div className=" md:w-[20%]">
            <h1 className="text-white text-xl mb-6 md:mb-14 font-bold">Have a Question?</h1>
            <div className="text-[#FFFFFFB3]  space-y-5 text-xl">
             <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
             <p><i className="fa-solid fa-phone mr-4"></i>  +86 364234131</p>
             <p><i className="fa-solid fa-envelope mr-4"></i>avofeywfeyf@gmail.com</p>
             
            </div>
          </div>
        </div>

        <div className="text-center text-[#FFFFFFB3] text-xl my-14 mt-20">
            <p>Copyright ©2024 All rights reserved | This template is made with  by <span className="text-red-600">Colorlib</span></p>

        </div>
      </div>
    </>
  );
};

export default Footer;
