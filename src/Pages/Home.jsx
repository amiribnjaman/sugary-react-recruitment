import React from "react";
import Header from "../Components/Header";
import ProImg from '../assets/img.jpg'
import ProImg2 from '../assets/img2.jpg'
import ChooseImg from '../assets/ch1.jpg'
import Person1 from '../assets/p1.jpg';
import Person2 from '../assets/p2.jpg';
import Person3 from "../assets/p3.jpg";
import Person4 from '../assets/p4.jpg';

const Home = () => {

  return (
    <>
      <Header />

      {/* Banner section */}
      <div className="w-[90%] mx-auto">
        <div className="bg-[#26A69A] mt-6 rounded-[15px] items-center h-[80vh]">
          <div className="w-[85%] mx-auto flex justify-between items-center">
            <div className="w-1/2 ">
              <h1 className="text-4xl font-semibold mt-10">
                <span className="text-white"> Your Online Store</span>
                <span className="text-orange-600"> for Everything</span>
                <span className="text-white"> Everytime</span>
              </h1>
              <p className="text-gray-200 mt-4">
                Your one-stop solution for all your e-commerce needs. Explore
                our wide range of products and services tailored just for you.
                Our platform is designed to provide you with a seamless shopping
                experience.
              </p>
              <button className="bg-orange-600 text-white rounded py-2 cursor-pointer mt-4 px-4 py-2">
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

      {/* Why choose us Section */}
      <div className="my-12 w-[75%] mx-auto">
        <div className="flex items-center  h-[80vh]">
          <div className="w-1/2 pr-10 flex items-center">
            <img
              src={ChooseImg}
              className="w-full h-full mr-10 rounded-[30px] opacity-80"
              alt=""
            />
          </div>
          <div className="w-1/2 pr-10">
            <h1 className="text-2xl font-semibold mt-10">
              <span className="text-gray-800">
                Why Choose <span className="text-orange-500">Us</span>?
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
                Happy Customer <span className="text-orange-500">Feedback</span>
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
            <button className="text-orange-500 underline font-semibold rounded py-2 cursor-pointer mt-4 px-4 py-2">
              See More Feedback
            </button>
          </div>

          {/* Happy customer Images */}
          <div className="mt-10 flex w-1/2">
            <img
              src={Person1}
              className="h-[350px] w-[150px] -ml-[20px] border border-2 border-white"
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
              className="h-[350px] w-[150px] -ml-[20px] border border-2 border-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
