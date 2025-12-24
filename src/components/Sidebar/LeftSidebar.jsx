/* eslint-disable no-unused-vars */
import React from "react";

const LeftSidebar = () => {
  return (
    <div className="hidden md:block w-1/5 h-screen sticky top-0 bg-white shadow p-4 overflow-hidden rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <ul className="space-y-3">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Create Post</li>
        <li className="hover:text-blue-600 cursor-pointer">My Profile</li>
        <li className="hover:text-blue-600 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
