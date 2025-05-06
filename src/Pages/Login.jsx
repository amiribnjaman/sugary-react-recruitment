

const Login = () => {
    return (
        <div className=" w-1/4 mx-auto text-center flex items-center justify-center h-screen gap-4 flex-col">
          {/* Left side */}
          <div>
            <div>
              <h1 className="text-3xl font-semibold">e-market</h1>
              <h2 className="my-3">
                Welcome to e-market, the ultimate platform for buying and
                selling items. 
              </h2>
            </div>
            <div>
              {/*  */}
              <div>
                {/* form */}
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="border-2 border-gray-300 rounded-md p-2"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="border-2 border-gray-300 rounded-md p-2"
                  />
                  <button className="bg-blue-500 text-white rounded-md p-2">
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