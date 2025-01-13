// import React from "react";
// import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    // Add your login logic here
  };

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-blue-500">
        <form
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className=" flex gap-5">
            <button
              type="submit"
              className=" bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
            >
              Login
            </button>
            <Link
              to={"/signUp"}
              className=" bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
            >
              Sign UP
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
