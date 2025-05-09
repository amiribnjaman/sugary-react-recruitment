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
      <div className="w-[90%] mx-auto">
        <div className="bg-[26A69A] bg-[f2f2f2] bg-[f0fff0] bg-[#fbfffb] mt-6 rounded-[15px] items-center h-[80vh]">
          <div className="w-[85%] mx-auto flex justify-between items-center">
            <div className="w-1/2 ">
              <h1 className="text-4xl font-semibold mt-10">
                <span className="text-gray-800"> Your Online Store</span>
                <span className="text-[#32cd32] -orange-600">
                  {" "}
                  for Everything
                </span>
                <span className="text-gray-800"> Everytime</span>
              </h1>
              <p className="text-gray-800 mt-4">
                Your one-stop solution for all your e-commerce needs. Explore
                our wide range of products and services tailored just for you.
                Our platform is designed to provide you with a seamless shopping
                experience.
              </p>
              <button className="b-orange-600 bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-4 px-4 py-2">
                Learn More
              </button>
            </div>
            <div className=" flex items-center justify-center pt-11">
              <img
                src={ProImg}
                className="w-[220px] h-[380px] rounded-tr-[80px] rounded-tl-[80px] -mr-[50px] z-10 pt-6"
                alt=""
              />
              <img
                src={ProImg2}
                className="w-[280px] h-[420px] rounded-tr-[100px] rounded-tl-[100px]"
                alt=""
              />
              {/* <div>hello</div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Sample Products */}
      <div className="my-18 w-[75%] mx-auto">
        <div className="flex justify-between items-center  mt-10">
          <h1 className="text-2xl font-semibold">
            <span className="text-gray-800">
              Some of our
              <span className="tex-orange-500 text-[#32cd32]">Products</span>
            </span>
          </h1>
          <h4 className="cursor-pointer font-semibold text-sm underline text-[#32cd32]">
            See All Products
          </h4>
        </div>

        <div className="flex gap-8 justify-between mt-5">
          {/* Products Sidebar */}
          <div className="px-4 py-2 rounded shadow w-[25%] h-[300px]">
            {/* <h5>Filter</h5>
            <input type="text" placeholder="Search by name" /> */}
            <ul className="flex flex-col gap-2">
              <li className="border border-gray-100 p-2 text-md font-semibold bg-[#fbfffb] pl-2 cursor-pointer">
                All Products
              </li>
              <li className="p-2 text-md pl-2 cursor-pointer">Best Selling</li>
              <li className="p-2 text-md pl-2 cursor-pointer">Trending</li>
              <li className="p-2 text-md pl-2 cursor-pointer">New Products</li>
            </ul>
          </div>

          {/* Products area */}
          <div className="grid grid-cols-3 w-[80%] gap-y-4 gap-x-4">
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
                  className="bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-2 w-full"
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
                  className="bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-2 w-full"
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
                  className="bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-2 w-full"
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
                  className="bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-2 w-full"
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
                  className="bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-2 w-full"
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
                  className="bg-[#32cd32] text-white rounded py-2 cursor-pointer mt-2 w-full"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us Section */}
      <div className="my-12 w-[75%] mx-auto">
        <div className="flex items-center  h-[80vh]">
          <div className="w-1/2 pr-10 flex items-center">
            <img
              src={ChooseImg}
              className="w-full h-full mr-10 rounded-[15px] opacity-80"
              alt=""
            />
          </div>
          <div className="w-1/2 pr-10">
            <h1 className="text-2xl font-semibold mt-10">
              <span className="text-gray-800">
                Why do Business with 
                <span className="tex-orange-500 text-[#32cd32]"> Us</span>?
              </span>
            </h1>
            <p className="text-gray-600 mt-4">
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
      <div className="my-16 w-[75%] mx-auto">
        <div className="flex items-center">
          <div className="w-1/2 pr-10">
            <h1 className="text-2xl font-semibold mt-10">
              <span className="text-gray-800">
                {" "}
                Happy Customer{" "}
                <span className="tex-orange-500 text-[#32cd32]">Feedback</span>
              </span>
            </h1>
            <p className="text-gray-600 mt-4">
              We value our customers' feedback and strive to improve our
              services based on your suggestions. Your satisfaction is our top
              priority.
            </p>
            <ul className=" pl-5 mt-7 text-gray-600">
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
            <button className="tex-orange-500 text-[#32cd32] underline font-semibold rounded py-2 cursor-pointer mt-4 px-4 py-2">
              See More Feedback
            </button>
          </div>

          {/* Happy customer Images */}
          <div className="mt-10 flex w-1/2">
            <img
              src={Person1}
              className="h-[350px] w-[150px] rounded-tl-[15px] rounded-bl-[15px] -ml-[20px] border border-2 border-white"
            />
            <img
              src={Person2}
              className="h-[350px] w-[150px] -ml-[20px] border border-2 border-white"
            />
            <img
              src={Person3}
              className="h-[350px] w-[150px] -ml-[20px] border border-2 border-white"
            />
            <img
              src={Person4}
              className="h-[350px] w-[150px] rounded-tr-[15px] rounded-br-[15px] -ml-[20px] border border-2 border-white"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
