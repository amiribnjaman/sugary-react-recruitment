import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../helper/logout";

const Dashboard = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      {/* Dashboard Navbar */}
      <nav className="flex justify-between  mt-8 items-center">
        <h1 className="text-2xl font-semibold">
          Dashboard{" "}
          <NavLink to="/" className="text-blue-500 text-sm ml-6">
            /Home
          </NavLink>
        </h1>

        <div>
          <button className="cursor-pointer" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* Dashbaord Body */}
      <div className="mt-10 ">
        <h3>Products</h3>
        <div className="mt-4 grid grid-cols-4 gap-x-4 gap-y-8">
          {/* Single Product Card */}
          <div className="border border-gray-300 rounded-md p-2 ">
            <img
              className="w-full bg-gray-100 inline-block h-[150px] rounded-md"
              src=""
              alt=""
            />
            <h1 className="text-lg text-center font-semibold">Card heading</h1>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p className="text-center my-2">Card price: 100 bdt</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer items-center justify-center flex mx-auto w-full">     
              Purchase Now
            </button> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard