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
    <nav className="w-[75%] mx-auto flex justify-between items-center md:mt-8">
      {/* Home page logo */}
      <div>
        <h1 className="text-3xl font-semibold">
          <span className="text-orange-500">E</span>
          market
        </h1>
        <h5 className="text-[12px] font-thin text-[#000] font-normal">
          Everything, Everytime
        </h5>
      </div>

      {/* Nav items */}
      <div>
        <ul className="flex gap-5 text-gray-800 items-center ">
          <li>
            <NavLink to="/dashboard" className="hover:font-semibold">
              {" "}
              Dashoard
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className="hover:font-semibold">
              {" "}
              About
            </NavLink>
          </li>
          <li>
            {getToken() ? (
              <button
                className="cursor-pointer hover:font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="hover:font-semibold">
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
