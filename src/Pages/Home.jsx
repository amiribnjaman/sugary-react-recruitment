import React from "react";
import Header from "../Components/Header";

const Home = () => {

  return (
    <>
      <Header />

      {/* Banner section */}
      <div>
        <div className="flex items-center h-[80vh]">
          <div className="w-1/2 pr-10">
            <h1 className="text-4xl font-semibold mt-10">
              <span className="text-gray-800"> Your Online Store</span>
              <span className="text-blue-600"> for Everything</span>
              <span className="text-gray-800"> Any Time</span>
            </h1>
            <p className="text-gray-600 mt-4">
              Your one-stop solution for all your e-commerce needs. Explore our
              wide range of products and services tailored just for you. Our
              platform is designed to provide you with a seamless shopping
              experience.
            </p>
            <button className="bg-blue-600 text-white rounded py-2 cursor-pointer mt-4 px-4 py-2">
              Learn More
            </button>
          </div>
          <div>
            <img src="" alt="" />
            <div>hello</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
