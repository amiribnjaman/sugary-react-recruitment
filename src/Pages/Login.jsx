
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle login function
  // This function will be called when the user submits the login form
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const res = await fetch('https://sugarytestapi.azurewebsites.net/AdminAccount/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: email, Password: password }),
      });

      const data = await res.json();
      if (data.Success) {
        localStorage.setItem('accessToken', data.Token);
        localStorage.setItem('refreshToken', data.RefreshToken);
        navigate('/dashboard');
      } else {
        console.log('Login failed');
        alert("Login failed. Please try again.");
      }
    } catch (err) {
      console.error('Error logging in:', err);
      alert('Login failed. Please try again.');
    }
    setLoading(false); 
  };


  return (
    <div className="w-[80%] mx-auto">
      <div className=" w-[40%] mx-auto text-center flex items-center justify-center h-screen gap-4 flex-col">
        {/* Login page title */}
        <div>
          <div>
            <h1 className="text-3xl font-semibold ">
              <span className="text-[#32cd32]">emar</span>
              <span className="">ket</span>
            </h1>
            <h2 className="my-3 mb-5 text-gray-600">
              Welcome to emarket, the ultimate platform for buying and selling
              goods.
            </h2>
          </div>
          <div>
            {/* Login form */}
            <div>
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Eamil or Username"
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-1 border-gray-300 rounded-md p-2 focus:border-green-600 focus:outline-none"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-1 border-gray-300 rounded-md p-2  focus:border-green-600 focus:outline-none"
                  required
                />
                <button className="bg-[#359f35] hover:bg-[#32cd32]  text-white rounded-md p-2 font-semibold transition duration-300 ease-in-out cursor-pointer">
                  {loading ? "Loading..." : "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login