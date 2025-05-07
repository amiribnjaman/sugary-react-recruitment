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
      <nav className="flex justify-between  mt-6 items-center">
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
    </>
  );
}

export default Dashboard