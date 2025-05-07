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
    <nav className="flex justify-between items-center md:mt-6">
      {/* Home page logo */}
      <h1 className="text-3xl font-semibold">
        <span className="text-blue-700">E</span>
        market
      </h1>

      {/* Nav items */}
      <div>
        <ul className="flex gap-5 text-gray-800 items-center ">
          <li>
            <NavLink to="/dashboard"> Dashoard</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard"> About</NavLink>
          </li>
          <li>
            {getToken() ? (
              <button className="cursor-pointer" onClick={handleLogout}>Logout</button>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
