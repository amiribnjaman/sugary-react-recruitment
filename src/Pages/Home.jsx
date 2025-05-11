import React from "react";
import Header from "../Components/Header";
import ProImg from '../assets/img.jpg'
import ProImg2 from '../assets/img2.jpg'
import ChooseImg from '../assets/ch1.jpg'
import Person1 from '../assets/p1.jpg';
import Person2 from '../assets/p2.jpg';
import Person3 from "../assets/p3.jpg";
import Person4 from '../assets/p4.jpg';
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // 
  const handleNavigateToDashboard = () => {
    navigate('/dashboard')
  }

  return (
    <>
      <Header />

      {/* Banner section */}
      <div className="md:w-[90%] w-[95%] mx-auto">
        <div className="bg-[26A69A] bg-[f2f2f2] bg-[f0fff0] bg-[#fbfffb] mt-6 rounded-[15px] items-center h-[40vh] md:h-[80vh]">
          <div className="w-[90%] md:w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 ">
              <h1 className="text-2xl md:text-4xl font-semibold mt-10 text-center md:text-left">
                <span className="text-gray-800"> Your Online Store</span>
                <span className="text-[#32cd32] -orange-600">
                  {" "}
                  for Everything
                </span>
                <span className="text-gray-800"> Everytime</span>
              </h1>
              <p className="text-gray-800 mt-4 text-center md:text-left text-[14px] md:text-normal">
                Your one-stop solution for all your e-commerce needs. Explore
                our wide range of products and services tailored just for you.
                <span className="hiddend md:block">
                  Our platform is designed to provide you with a seamless
                  shopping experience.
                </span>
              </p>
              <button className="b-orange-600 bg-[#359f35] hover:bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-4 px-4 py-2 text-center md:text-left block mx-auto md:mx-0">
                Learn More
              </button>
            </div>
            <div className=" flex items-center justify-center pt-11">
              <img
                src={ProImg}
                className="w-[220px] h-[380px] rounded-tr-[80px] rounded-tl-[80px] -mr-[50px] z-10 pt-6 md:block hidden"
                alt=""
              />
              <img
                src={ProImg2}
                className="w-[280px] h-[420px] rounded-tr-[100px] rounded-tl-[100px] md:block hidden"
                alt=""
              />
              {/* <div>hello</div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Sample Products */}
      <div className="my-18 w-[90%] md:w-[75%] mx-auto">
        <div className="flex justify-between items-center  mt-10">
          <h1 className="text-xl md:text-2xl font-semibold">
            <span className="text-gray-800">
              Some of our
              <span className="tex-orange-500 text-[#32cd32]"> Products</span>
            </span>
          </h1>
          <button
            className="cursor-pointer font-semibold text-sm underline text-[#359f35] hover:text-[#32cd32] text-sm md:text-[16px]"
            onClick={() => handleNavigateToDashboard()}
          >
            All Products
          </button>
        </div>

        <div className="md:flex gap-8 justify-between mt-5">
          {/* Products Sidebar */}
          <div className="px-4 py-2 rounded shadow md:w-[25%] md:h-[300px]">
            {/* <h5>Filter</h5>
            <input type="text" placeholder="Search by name" /> */}
            <ul className="flex flex-row md:flex-col gap-2 md:text-normal text-sm">
              <li className="border border-gray-100 p-2 text-md font-semibold bg-[#fbfffb] pl-2 cursor-pointer rounded">
                All Products
              </li>
              <li className="p-2 text-md pl-2 cursor-pointer border border-white hover:border-gray-100 rounded">
                Best Selling
              </li>
              <li className="p-2 text-md pl-2 cursor-pointer border border-white hover:border-gray-100 rounded hidden md:block">
                Trending
              </li>
              <li className="p-2 text-md pl-2 cursor-pointer border border-white hover:border-gray-100 rounded">
                New Products
              </li>
            </ul>
          </div>

          {/* Products area */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:w-[80%] gap-y-6 md:gap-y-4 gap-x-4 mt-4 md:mt-0">
            {/* Product card */}
            <div className="bg-white shadow-md rounded-lg p-4 md:flex flex-col gap-2">
              <img
                src={ProImg}
                alt=""
                className="w-full h-32 object-cover rounded-md"
              />
              <h4 className="text-lg font-semibold">Blender</h4>
              <h5 className="text-sm">Brand: Shakura</h5>
              <p className="text-gray-600"></p>
              <div className="flex gap-2 justify-between items-center">
                <p className="text-gray-800 font-bold">$7498</p>
                <button className="border border-gray-100 py-2 cursor-pointer mt-2 rounded bg-[#fbfffb] px-3 text-sm font-semibold">
                  Add to Cart
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => handleNavigateToDashboard()}
                  className="bg-[#359f35] hover:bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-2 w-full"
                >
                  Buy Now
                </button>
              </div>
            </div>
            {/* Product card */}
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2">
              <img
                src={ProImg2}
                alt=""
                className="w-full h-32 object-cover rounded-md"
              />
              <h4 className="text-lg font-semibold">Facewash</h4>
              <h5 className="text-sm">Brand: Shakura</h5>
              <p className="text-gray-600"></p>
              <div className="flex gap-2 justify-between items-center">
                <p className="text-gray-800 font-bold">$7498</p>
                <button className="border border-gray-100 py-2 cursor-pointer mt-2 rounded bg-[#fbfffb] px-3 text-sm font-semibold">
                  Add to Cart
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => handleNavigateToDashboard()}
                  className="bg-[#359f35] hover:bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-2 w-full"
                >
                  Buy Now
                </button>
              </div>
            </div>
            {/* Product card */}
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2">
              <img
                src={ProImg}
                alt=""
                className="w-full h-32 object-cover rounded-md"
              />
              <h4 className="text-lg font-semibold">Blender</h4>
              <h5 className="text-sm">Brand: Shakura</h5>
              <p className="text-gray-600"></p>
              <div className="flex gap-2 justify-between items-center">
                <p className="text-gray-800 font-bold">$7498</p>
                <button className="border border-gray-100 py-2 cursor-pointer mt-2 rounded bg-[#fbfffb] px-3 text-sm font-semibold">
                  Add to Cart
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => handleNavigateToDashboard()}
                  className="bg-[#359f35] hover:bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-2 w-full"
                >
                  Buy Now
                </button>
              </div>
            </div>
            {/* Product card */}
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2">
              <img
                src={ProImg2}
                alt=""
                className="w-full h-32 object-cover rounded-md"
              />
              <h4 className="text-lg font-semibold">Facewash</h4>
              <h5 className="text-sm">Brand: Shakura</h5>
              <p className="text-gray-600"></p>
              <div className="flex gap-2 justify-between items-center">
                <p className="text-gray-800 font-bold">$7498</p>
                <button className="border border-gray-100 py-2 cursor-pointer mt-2 rounded bg-[#fbfffb] px-3 text-sm font-semibold">
                  Add to Cart
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => handleNavigateToDashboard()}
                  className="bg-[#359f35] hover:bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-2 w-full"
                >
                  Buy Now
                </button>
              </div>
            </div>
            {/* Product card */}
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2">
              <img
                src={ProImg}
                alt=""
                className="w-full h-32 object-cover rounded-md"
              />
              <h4 className="text-lg font-semibold">Facewash</h4>
              <h5 className="text-sm">Brand: Shakura</h5>
              <p className="text-gray-600"></p>
              <div className="flex gap-2 justify-between items-center">
                <p className="text-gray-800 font-bold">$7498</p>
                <button className="border border-gray-100 py-2 cursor-pointer mt-2 rounded bg-[#fbfffb] px-3 text-sm font-semibold">
                  Add to Cart
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => handleNavigateToDashboard()}
                  className="bg-[#359f35] hover:bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-2 w-full"
                >
                  Buy Now
                </button>
              </div>
            </div>
            {/* Product card */}
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2">
              <img
                src={ProImg2}
                alt=""
                className="w-full h-32 object-cover rounded-md"
              />
              <h4 className="text-lg font-semibold">Facewash</h4>
              <h5 className="text-sm">Brand: Shakura</h5>
              <p className="text-gray-600"></p>
              <div className="flex gap-2 justify-between items-center">
                <p className="text-gray-800 font-bold">$7498</p>
                <button className="border border-gray-100 py-2 cursor-pointer mt-2 rounded bg-[#fbfffb] px-3 text-sm font-semibold">
                  Add to Cart
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => handleNavigateToDashboard()}
                  className="bg-[#359f35] hover:bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-2 w-full"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us Section */}
      <div className="md:my-16 my-20 w-[90%] md:w-[75%] mx-auto">
        <div className="flex flex-col flex-col-reverse md:flex-row items-center h-[80vh]">
          <div className="md:w-1/2 md:pr-10 md:flex items-center">
            <img
              src={ChooseImg}
              className="w-full h-full mr-10 rounded-[15px] opacity-80"
              alt=""
            />
          </div>
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-xl md:text-2xl font-semibold mt-10">
              <span className="text-gray-800">
                Why do Business with
                <span className="tex-orange-500 text-[#32cd32]"> Us</span>?
              </span>
            </h1>
            <p className="text-gray-600 mt-4 text-[14px] md:text-normal">
              We are committed to providing you with the best online shopping
              experience. Our platform is user-friendly, secure, and offers a
              wide range of products at competitive prices.
            </p>
            <ul className="list-disc pl-5 mt-4 text-gray-600 text-sm">
              <li className="mb-2">
                <strong className="text-gray-800">
                  Wide Range of Products:
                </strong>{" "}
                From electronics to fashion, we have everything you need in one
                place.
              </li>
              <li className="mb-2">
                <strong className="text-gray-800">Affordable Prices:</strong>{" "}
                Enjoy competitive pricing and great deals on all your favorite
                items.
              </li>
              <li className="mb-2">
                <strong className="text-gray-800">Secure Payments:</strong> Your
                transactions are safe with our advanced security measures.
              </li>
              <li className="mb-2">
                <strong className="text-gray-800">Fast Delivery:</strong> Get
                your orders delivered quickly and efficiently to your doorstep.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Feedback section */}
      <div className="md:my-16 my-20 w-[90%] md:w-[75%] mx-auto">
        <div className="md:flex items-center">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-xl md:text-2xl font-semibold mt-10">
              <span className="text-gray-800">
                Happy Customer
                <span className="tex-orange-500 text-[#32cd32]">Feedback</span>
              </span>
            </h1>
            <p className="text-gray-600 mt-4 text-[14px] md:text-normal">
              We value our customers' feedback and strive to improve our
              services based on your suggestions. Your satisfaction is our top
              priority.
            </p>
            <ul className=" pl-5 mt-7 text-gray-600 text-[14px] md:text-normal">
              <li className="mb-2">
                "I had a great shopping experience! The delivery was fast and
                the product quality is excellent."
                <strong className="text-gray-800 ml-2">Jane Doy</strong>
              </li>
              <li className="mb-2">
                "I love the variety of products available. I found everything I
                needed in one place."{" "}
                <strong className="text-gray-800 ml-2">Jane Smith</strong>
              </li>
              <li className="mb-2">
                "The customer support team was very helpful and resolved my
                issue quickly."{" "}
                <strong className="text-gray-800 ml-2">Michael Brown</strong>
              </li>
              <li className="mb-2">
                "I appreciate the secure payment options. I felt safe shopping
                on this platform."
                <strong className="text-gray-800 ml-2">Emily Johnson</strong>
              </li>
            </ul>
            <button className="tex-orange-500 text-[#359f35] hover:text-[#32cd32] underline font-semibold rounded py-2 cursor-pointer mt-4 px-4 py-2 text-sm md:text-[16px]">
              See More Feedback
            </button>
          </div>

          {/* Happy customer Images */}
          <div className="mt-10 flex md:w-1/2">
            <img
              src={Person1}
              className="h-[300px] md:h-[350px] w-1/2 md:w-[150px] rounded-tl-[15px] rounded-bl-[15px] md:-ml-[20px] border border-2 border-white"
            />
            <img
              src={Person2}
              className="h-[350px] w-[150px] -ml-[20px] border border-2 border-white md:block hidden"
            />
            <img
              src={Person3}
              className="h-[350px] w-[150px] -ml-[20px] border border-2 border-white md:block hidden"
            />
            <img
              src={Person4}
              className="h-[300px] md:h-[350px] w-1/2 md:w-[150px] rounded-tr-[15px] rounded-br-[15px] md:-ml-[20px] border border-2 border-white"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
