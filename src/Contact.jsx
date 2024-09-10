import React from "react";

const Contact = () => {
  return (
    <>


      <div className="text-center my-14">
        <h3 className="text-red-500 text-xl">CONTACT US</h3>
        <h1 className="text-black font-bold text-2xl md:text-4xl">
          HAVE A PROJECT?
        </h1>
        <p className="text-[#A0A0B4] mt-6 mx-5">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center my-10">
        <div className="w-full md:w-[50%] bg-[#f3f3f3] py-10 px-8 border rounded-md space-y-6">
          <div className="flex flex-col md:flex-row space-y-3 justify-around">
          <input
              type="text"
              placeholder="Your Name"
              className=" w-full md:w-[47%] pl-5 py-6 mt-[12px] outline-none"
            />
            <input
              type="text"
              placeholder="Your Email"
              className=" w-full md:w-[47%] pl-5 py-6 outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full pl-5 py-6 outline-none"
            />
          </div>
          <div>
            <textarea
              rows="10"
              placeholder="Message"
              className="w-full pl-5 py-6 outline-none"
            />
          </div>
          <button className="text-white bg-red-700 px-6 py-5 rounded-md text-xl">
            Send Message
          </button>
        </div>

        <div className="ml-7 text-xl">
          <div className="space-y-14">
            <div className="flex justify-center items-center space-x-4 ml-2">
              <i className="fa-solid fa-location-dot text-red-600"></i>
              <div>
                <p>Adress:</p>
                <p className="text-[#A0A0B4]">
                  198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </div>
            </div>
            <div className="flex justify-left items-center space-x-4 ml-2">
            <i className="text-red-600 fa-solid fa-phone"></i>
              <div>
                <p>Phone:</p>
                <p className="text-red-700">
                  +89 5642368 77
                </p>
              </div>
            </div>
            <div className="flex justify-left items-center space-x-4 ml-2">
            <i class="fa-solid fa-paper-plane text-red-600"></i>
              <div>
                <p>Email:</p>
                <p className="text-red-700">
                  vcgstteej@gmail.com
                </p>
              </div>
            </div>
            <div className="flex justify-left items-center space-x-4 ml-2">
            <i class="fa-solid fa-globe text-red-600"></i>
              <div>
                <p>Website:</p>
                <p className="text-red-600">
                  yourwebsite.com
                </p>
              </div>
            </div>
           
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
