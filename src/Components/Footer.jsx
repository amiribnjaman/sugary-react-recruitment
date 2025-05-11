import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Footer main/top section */}
      <div className="bg-[fffff0] bg-[#fbfffb] w-[95%] md:w-[90%] mx-auto py-8">
        <div className="w-[85%] mx-auto md:flex gap-8 justify-between">
          {/* Logo Section */}
          <div className="md:w-1/3">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold ">
                <span className="text-[#32cd32]">emar</span>
                <span className="">ket</span>
              </h1>
              <h5 className="text-[12px] font-thin text-[#000] font-normal">
                Everything, Everytime
              </h5>
            </div>
            <p className="font-thin text-[12px] md:text-[14px] text-gray-600 mt-2">
              At Emarket, we strive to provide the best online shopping
              experience with a wide range of products to meet all your needs.
              Shop with confidence and convenience, anytime and anywhere.
            </p>
          </div>

          {/*  */}
          <div className="flex flex-col md:flex-row md:gap-8 gap-6 mt-8">
            <ul className="text-gray-800 font-semibold text-[12px] md:text-[14px] gap-2 flex flex-col">
              <li className="cursor-pointer">All Products</li>
              <li className="cursor-pointer">Best Selling</li>
              <li className="cursor-pointer">Trending Now</li>
              <li className="cursor-pointer">Offers</li>
              <li className="cursor-pointer">Upcomming</li>
            </ul>
            <ul className="text-gray-800 font-semibold text-[12px] md:text-[14px] gap-2 flex flex-col">
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">Career</li>
            </ul>
            <ul className="text-gray-800 font-semibold text-[12px] md:text-[14px] ">
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms & Conditions</li>
              <li className="cursor-pointer">Legals</li>
            </ul>
            <ul className="text-gray-800 font-semibold text-[12px] md:text-[14px] gap-1 flex flex-col">
              <li>Location 1: Gazipur, Dhaka</li>
              <li className="cursor-pointer">Email: dhakazone@emarket.com</li>
              <li className="cursor-pointer">Phones: 01839234, 081287183</li>
              <span className="my-2 block"></span>
              <li>Location 2: Halishohor, Chittagong</li>
              <li className="cursor-pointer">Email: chtzone@emarket.com</li>
              <li className="cursor-pointer">Phones: 01839234, 081287183</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer copyright section */}
      <div className="bg-[#32cd32] w-[100%] py-4 text-center text-white font-semibold text-[14px] mt-4">
        <p>&copy; 2025 Emarket. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
