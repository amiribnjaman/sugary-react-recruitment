
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle login function
  // This function will be called when the user submits the login form
  const handleLogin = async (e) => {
    e.preventDefault();
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
      }
    } catch (err) {
      console.error('Error logging in:', err);
    }
  };


    return (
      <div className=" w-1/4 mx-auto text-center flex items-center justify-center h-screen gap-4 flex-col">
        {/* Login page title */}
        <div>
          <div>
            <h1 className="text-3xl font-semibold">
              <span className="text-blue-700">E</span>
              market
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
                  placeholder="Username"
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-1 border-gray-300 rounded-md p-2 active:border-blue-700 focus:border-blue-700 focus:outline-none"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-1 border-gray-300 rounded-md p-2 active:border-blue-700 focus:border-blue-700 focus:outline-none"
                  required
                />
                <button className="bg-blue-700 text-white rounded-md p-2 font-semibold hover:bg-blue-800 transition duration-300 ease-in-out cursor-pointer">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login