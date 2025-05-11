import { NavLink, useNavigate } from "react-router-dom";
import { getToken } from "../helper/token";
import { logout } from "../helper/logout";

const Header = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-[90%] md:w-[75%] mx-auto flex justify-between items-center mt-4 md:mt-8">
      {/* Home page logo */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold ">
          <span className="text-[#32cd32]">emar</span>
          <span className="">ket</span>
        </h1>
        <h5 className="text-[12px] font-thin text-[#000] font-normal hidden md:block">
          Everything, Everytime
        </h5>
      </div>

      {/* Nav items */}
      <div>
        <ul className="flex gap-5 text-gray-800 items-center font-sembold text-[14px] md:text-[16px]">
          <li>
            <NavLink
              to="/dashboard"
              className="hover:text-[#32cd32] font-semibold"
            >
              {" "}
              Dashoard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className="hover:text-[#32cd32] font-semibold hidden md:block"
            >
              {" "}
              About
            </NavLink>
          </li>
          <li>
            {getToken() ? (
              <button
                className="cursor-pointer hover:text-[#32cd32] font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="hover:text-[#32cd32] font-semibold"
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
