import { NavLink } from "react-router-dom";

const Home = () => {
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
            <NavLink to="/login"> Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Home;
