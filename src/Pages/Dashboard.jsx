import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../helper/logout";
import { useCallback, useEffect, useRef, useState } from "react";
import { getToken } from "../helper/token";

const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);
  const [buyCard, setBuyCard] = useState(false);
  // Function to handle logout
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Function to fetch products from the API
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const filter = btoa(
      JSON.stringify({ Skip: page * 10, Limit: 10, Types: [1] })
    );

    const token = getToken();
    // console.log(token)
    if (!token) return;
    const finalToken = token?.split(".");

    // Fetch products from the API
    const res = await fetch(
      `https://sugarytestapi.azurewebsites.net/Materials/GetAll/?filter=${filter}`,
      {
        headers: {
          Authorization: `Bearer ${finalToken[0]}`,
        },
      }
    );

    if (res.status === 401) {
      const newToken = await refreshAccessToken();
      if (newToken) return fetchProducts();
      return navigate("/login");
    }

    if (!res.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await res.json();
    console.log(data);
    // Check if the response contains materials
    if (data?.Materials.length > 0) {
      // If the number of products is less than the limit, set hasMore to false
      setproducts((prev) => [...prev, ...data.Materials]);
    }
    // Update the products state with the fetched data
    setLoading(false);
  }, [page, navigate]);

  // Initial load
  useEffect(() => {
    fetchProducts();
  }, []);

  // Trigger fetchProducts when the page state changes.
  // This effect triggers the fetchProducts function whenever the page state changes, nsuring new products are loaded as the user navigates through the page.
  useEffect(() => {
    // Check if the user is at the bottom of the page
    const observer = new IntersectionObserver(
      (entries) => {
        ``;
        // If the loader element is intersecting, fetch more products
        if (entries[0].isIntersecting) {
          fetchProducts();
        }
      },
      { threshold: 1 }
    );

    // Observe the loader element
    if (loader.current) {
      observer.observe(loader.current);
    }

    // Cleanup function to unobserve the loader element
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [fetchProducts]);

  return (
    <div className="w-[75%] mx-auto">
      {/* Dashboard Navbar */}
      <nav className="flex justify-between  mt-8 items-center">
        <h1 className="text-2xl font-semibold">
          Dashboard
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
          {products.map((product) => (
            <div
              key={product.Id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2"
            >
              <img
                src={
                  "https://d1wh1xji6f82aw.cloudfront.net/" + product.CoverPhoto
                }
                alt={product.Title}
                className="w-full h-32 object-cover rounded-md"
              />
              <h4 className="text-lg font-semibold">{product.Title}</h4>
              <h5 className="text-sm">Brand: {product.BrandName}</h5>
              <p className="text-gray-600">{product.Description}</p>
              <p className="text-gray-800 font-bold">${product.SalesPrice}</p>
              <button
                onClick={() => setBuyCard(true)}
                className="bg-orange-600 text-white rounded py-2 cursor-pointer mt-2 w-full"
              >
                Buy Now
              </button>
            </div>
          ))}
          {/* Buy card */}
          <div
            className={
              buyCard == true
                ? "fixed top-[30%] left-[40%] block bg-white shadow-xl p-3 rounded w-[350px] flex flex-col items-center justify-center h-[180px]"
                : "hidden"
            }
          >
            <h4 className="text-xl font-semibold text-center">
              Thanks for your interest. We are working on it.
            </h4>
            <button
              onClick={() => setBuyCard(false)}
              className="bg-blue-500 block px-6 py-2 text-white rounded mt-8 cursor-pointer"
            >
              OK
            </button>
          </div>
        </div>
        <div>
          {loading && (
            <p className="text-center mt-8 font-semibold">Loading...</p>
          )}
          <div ref={loader} className="h-10" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
