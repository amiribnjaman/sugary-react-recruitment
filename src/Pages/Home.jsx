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
              <span className="text-gray-900"> Your Online Store</span>
              <span className="text-orange-700"> for Everything</span>
              <span className="text-gray-800"> Everytime</span>
            </h1>
            <p className="text-gray-600 mt-4">
              Your one-stop solution for all your e-commerce needs. Explore our
              wide range of products and services tailored just for you. Our
              platform is designed to provide you with a seamless shopping
              experience.
            </p>
            <button className="bg-orange-700 text-white rounded py-2 cursor-pointer mt-4 px-4 py-2">
              Learn More
            </button>
          </div>
          <div>
            <img src="" alt="" />
            <div>hello</div>
          </div>
        </div>
      </div>

      {/* Why choose us Section */}
      <div className="mb-10">
        <div className="flex items-center h-[80vh]">
          <div className="w-1/2 pr-10">
            <img src="" alt="" />
            <div>hello</div>
          </div>
          <div className="w-1/2 pr-10">
            <h1 className="text-4xl font-semibold mt-10">
              <span className="text-gray-800"> Why Choose Us?</span>
            </h1>
            <p className="text-gray-600 mt-4">
              We are committed to providing you with the best online shopping
              experience. Our platform is user-friendly, secure, and offers a
              wide range of products at competitive prices.
            </p>
            <ul className="list-disc pl-5 mt-4 text-gray-600">
              <li className="mb-2">
                <strong className="text-gray-800">Wide Range of Products:</strong> From electronics to fashion, we have everything you need in one place.
              </li>
              <li className="mb-2">
                <strong className="text-gray-800">Affordable Prices:</strong> Enjoy competitive pricing and great deals on all your favorite items.
              </li>
              <li className="mb-2">
                <strong className="text-gray-800">Secure Payments:</strong> Your transactions are safe with our advanced security measures.
              </li>
              <li className="mb-2">
                <strong className="text-gray-800">Fast Delivery:</strong> Get your orders delivered quickly and efficiently to your doorstep.
              </li>
              <li className="mb-2">
                <strong className="text-gray-800">Excellent Customer Support:</strong> Our team is here to assist you with any queries or concerns.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
