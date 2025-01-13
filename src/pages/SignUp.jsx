// import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-blue-500">
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
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
        <div className="mb-4">
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
        <div className="mb-4">
          <label
            htmlFor="number"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 focus:outline-none"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="connectpoint"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Connect Point Name
          </label>
          <input
            type="text"
            id="connectPoint"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-purple-400 focus:outline-none"
            placeholder="Enter Your Connectpoint Account name"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
